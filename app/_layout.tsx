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
    RedHatDisplayLight: fonts.RedHatDisplayLight,
    RedHatDisplayRegular: fonts.RedHatDisplayRegular,
    RedHatDisplayMedium: fonts.RedHatDisplayMedium,
    RedHatDisplaySemiBold: fonts.RedHatDisplaySemiBold,
    RedHatDisplayBold: fonts.RedHatDisplayBold,
    RedHatDisplayExtraBold: fonts.RedHatDisplayExtraBold,
    RedHatDisplayBlack: fonts.RedHatDisplayBlack,
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
