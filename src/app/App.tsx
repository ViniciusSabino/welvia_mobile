import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';

import { RootNavigator } from './navigation/RootNavigator';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export function App() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator></RootNavigator>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
