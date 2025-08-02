import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { getPlannersService } from '../lib/supabase-fallback'

export const usePlannerData = (plannerType) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [lastSaved, setLastSaved] = useState(null)
  
  const { user, isAuthenticated } = useAuth()
  const plannersService = getPlannersService()

  // Charger les données du planner
  const loadData = useCallback(async () => {
    if (!isAuthenticated || !user) {
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      const { data: plannerData, error: plannerError } = await plannersService.getPlannerData(
        user.id, 
        plannerType
      )
      
      if (plannerError && plannerError.code !== 'PGRST116') { // PGRST116 = no rows found
        console.error('Erreur lors du chargement des données:', plannerError)
        setError(plannerError.message)
      } else {
        setData(plannerData?.data || {})
        if (plannerData?.updated_at) {
          setLastSaved(new Date(plannerData.updated_at))
        }
      }
    } catch (err) {
      console.error('Erreur lors du chargement des données:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [user, isAuthenticated, plannerType, plannersService])

  // Sauvegarder les données
  const saveData = useCallback(async (newData) => {
    if (!isAuthenticated || !user) {
      setError('Utilisateur non connecté')
      return false
    }

    try {
      setSaving(true)
      setError(null)
      
      const { data: savedData, error: saveError } = await plannersService.savePlannerData(
        user.id,
        plannerType,
        newData
      )
      
      if (saveError) {
        console.error('Erreur lors de la sauvegarde:', saveError)
        setError(saveError.message)
        return false
      }
      
      setData(newData)
      setLastSaved(new Date())
      return true
    } catch (err) {
      console.error('Erreur lors de la sauvegarde:', err)
      setError(err.message)
      return false
    } finally {
      setSaving(false)
    }
  }, [user, isAuthenticated, plannerType, plannersService])

  // Mettre à jour une section spécifique
  const updateSection = useCallback(async (sectionKey, sectionData) => {
    const newData = {
      ...data,
      [sectionKey]: sectionData
    }
    
    setData(newData) // Mise à jour optimiste
    const success = await saveData(newData)
    
    if (!success) {
      // Rollback en cas d'erreur
      setData(data)
    }
    
    return success
  }, [data, saveData])

  // Mettre à jour un champ spécifique dans une section
  const updateField = useCallback(async (sectionKey, fieldKey, fieldValue) => {
    const currentSection = data[sectionKey] || {}
    const newSectionData = {
      ...currentSection,
      [fieldKey]: fieldValue
    }
    
    return updateSection(sectionKey, newSectionData)
  }, [data, updateSection])

  // Supprimer les données du planner
  const deleteData = useCallback(async () => {
    if (!isAuthenticated || !user) {
      setError('Utilisateur non connecté')
      return false
    }

    try {
      setLoading(true)
      setError(null)
      
      const { error: deleteError } = await plannersService.deletePlannerData(
        user.id,
        plannerType
      )
      
      if (deleteError) {
        console.error('Erreur lors de la suppression:', deleteError)
        setError(deleteError.message)
        return false
      }
      
      setData({})
      setLastSaved(null)
      return true
    } catch (err) {
      console.error('Erreur lors de la suppression:', err)
      setError(err.message)
      return false
    } finally {
      setLoading(false)
    }
  }, [user, isAuthenticated, plannerType, plannersService])

  // Charger les données au montage du composant
  useEffect(() => {
    loadData()
  }, [loadData])

  // Recharger si l'utilisateur change
  useEffect(() => {
    if (isAuthenticated && user) {
      loadData()
    } else {
      setData({})
      setLastSaved(null)
      setLoading(false)
    }
  }, [user, isAuthenticated, loadData])

  return {
    data,
    loading,
    saving,
    error,
    lastSaved,
    saveData,
    updateSection,
    updateField,
    deleteData,
    reload: loadData
  }
}

// Hook pour la sauvegarde automatique avec debounce
export const useAutoSave = (plannerType, data, delay = 2000) => {
  const [autoSaveTimer, setAutoSaveTimer] = useState(null)
  const { saveData, saving } = usePlannerData(plannerType)

  useEffect(() => {
    // Annuler le timer précédent
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer)
    }

    // Créer un nouveau timer pour la sauvegarde automatique
    const timer = setTimeout(() => {
      if (data && Object.keys(data).length > 0) {
        saveData(data)
      }
    }, delay)

    setAutoSaveTimer(timer)

    // Cleanup
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [data, delay, saveData])

  return { saving }
}

export default usePlannerData

