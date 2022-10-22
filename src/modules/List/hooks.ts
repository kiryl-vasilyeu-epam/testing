import { useCallback, useEffect, useState } from "react";
import { apiCall } from '../../api';

const useFruitsApi = (value: string) => {
  const [fruits, setFruits] = useState(['apple']);
  const [loading, setLoading] = useState(false);

  const loadFruits = useCallback(async () => {
    setLoading(true);
    const newFruits = await apiCall(value)
    setFruits(newFruits);
    setLoading(false);
  }, [value]);

  useEffect(() => {
    loadFruits()
  }, [value, loadFruits])


  return {
    fruits,
    loading
  }
}

export  { useFruitsApi };