import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        className="font-RedHatDisplayRegular"
        style={{ fontSize: 25 }}>
        Onboarding
      </Text>
    </SafeAreaView>
  );
};

export default Onboarding;
