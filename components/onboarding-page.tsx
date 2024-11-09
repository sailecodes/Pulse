import { View, Text, ImageSourcePropType, Image } from "react-native";

interface OnboardingPageProps {
  primaryText: string;
  secondaryText: string;
}

const OnboardingPage = ({ source, primaryText, secondaryText }: OnboardingPageProps) => {
  return (
    <View className="flex-1 justify-center items-center mx-5 mb-[50px]">
      {primaryText && (
        <Text
          className={`
          ${secondaryText && "font-RHDBold text-purple-500 text-5xl tracking-[-1.5px]"}
          ${!secondaryText && "font-RHDSemiBold text-neutral-800 text-3xl text-center"}
        `}>
          {primaryText}
        </Text>
      )}
      <Text className="font-RHDMedium text-neutral-500 text-2xl text-center">{secondaryText}</Text>
    </View>
  );
};

export default OnboardingPage;
