import {useCallback, useState} from 'react';
import TestService from './test.service';

interface TestApiResult {
  loading: boolean;
  error: Error | null;
  getData: () => Promise<string>;
}
export function useApiTest(): TestApiResult {
  const [loading, setLoading] = useState(false)
  const [error, setError ] = useState(null)

  const getData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await TestService.testApi()
      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      setError(String(e))
    }
  }, [])

  return {
    loading,
    error,
    getData
  }
}