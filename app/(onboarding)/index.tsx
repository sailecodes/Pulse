import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Text, View } from "react-native";
import CustomButton from "@/components/custom-button";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex-1 justify-center items-center pt-[50px] mx-5">
        <Text className="font-RHDBold text-purple-200 text-5xl tracking-[-1.5px]">Pulse</Text>
        <Text className="font-RHDBold text-purple-300 text-5xl tracking-[-1.5px]">Pulse</Text>
        <Text className="font-RHDBold text-purple-600 text-5xl tracking-[-1.5px]">Pulse</Text>
        <Text className="font-RHDMedium text-neutral-500 text-2xl text-center">
          Stay in rhythm with simplified task management
        </Text>
      </View>
      <CustomButton
        className="mb-5"
        isPrimary
        text="Get started"
        onPress={() => router.navigate("/(root)/(tabs)/home")}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
