import "react-native-reanimated";
import "../global.css";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { fonts } from "@/lib/fonts";
import { tokenCache } from "@/lib/clerk";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

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
    <ClerkProvider
      publishableKey={publishableKey}
      tokenCache={tokenCache}>
      <ClerkLoaded>
        <Stack>
          <Stack.Screen
            name="(onboarding)"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(root)"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
