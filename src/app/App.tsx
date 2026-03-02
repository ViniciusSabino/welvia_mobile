import { View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import { DashboardScreen } from "../modules/dashboard/screens/DashboardScreen";

SplashScreen.preventAutoHideAsync();

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
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <DashboardScreen></DashboardScreen>
    </View>
  );
}
