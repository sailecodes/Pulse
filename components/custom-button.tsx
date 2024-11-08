import { Image, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
  isIcon?: boolean;
  isPrimary?: boolean;
  isVerification?: boolean;
  source?: ImageSourcePropType;
  text?: string;
};

const CustomButton = ({ isIcon, isPrimary, isVerification, source, text }: CustomButtonProps) => {
  return (
    <View className={`h-[55px] ${isIcon && "w-[80px]"}`}>
      <TouchableOpacity
        className={`
        flex-1 justify-center items-center px-5 mx-5 border rounded-xl shadow-md
        ${!isIcon && isPrimary && !isVerification && "bg-purple-500 border-purple-500 shadow-purple-500/30"}
        ${!isIcon && !isPrimary && isVerification && "bg-green-500 border-green-500 shadow-green-500/30"}
        ${(isIcon || (!isPrimary && !isVerification)) && "bg-neutral-100 border-neutral-200 shadow-neutral-200"}
      `}>
        {isIcon && (
          <Image
            className="w-[30] h-[30]"
            source={source}
          />
        )}
        {!isIcon && (
          <Text
            className={`
            font-RHDBold text-xl
            ${(isPrimary || isVerification) && "text-neutral-100"} 
            ${!isPrimary && !isVerification && "text-neutral-800"}
          `}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
