import { useEffect } from 'react';
import { router } from 'expo-router';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function Index() {
  useFrameworkReady();

  useEffect(() => {
    router.replace('/splash');
  }, []);

  return null;
}
