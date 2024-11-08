import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/custom-button";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 justify-between bg-red-100">
      <Text>Helo</Text>
      <CustomButton
        isPrimary
        text="Next"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
