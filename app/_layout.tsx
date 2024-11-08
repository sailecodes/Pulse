import "react-native-reanimated";
import "../global.css";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { fonts } from "@/lib/fonts";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    RHDLight: fonts.RHDLight,
    RHDRegular: fonts.RHDRegular,
    RHDMedium: fonts.RHDMedium,
    RHDSemiBold: fonts.RHDSemiBold,
    RHDBold: fonts.RHDBold,
    RHDExtraBold: fonts.RHDExtraBold,
    RHDBlack: fonts.RHDBlack,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(onboarding)"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
