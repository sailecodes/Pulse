import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
  className?: string;
  isIcon?: boolean;
  isPrimary?: boolean;
  isVerification?: boolean;
  source?: ImageSourcePropType;
  text?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const CustomButton = ({ className, isIcon, isPrimary, isVerification, source, text, onPress }: CustomButtonProps) => {
  return (
    <View className={`w-full h-[55px] ${isIcon && "w-[80px]"} ${className}`}>
      <TouchableOpacity
        className={`
          flex-1 justify-center items-center px-5 mx-5 border rounded-xl shadow-md
          ${!isIcon && isPrimary && !isVerification && "bg-purple-500 border-purple-500 shadow-purple-500/30"}
          ${!isIcon && !isPrimary && isVerification && "bg-green-500 border-green-500 shadow-green-500/30"}
          ${(isIcon || (!isPrimary && !isVerification)) && "bg-neutral-100 border-neutral-200 shadow-neutral-200"}
        `}
        onPress={onPress}>
        {isIcon && (
          <Image
            className="w-[30px] h-[30px]"
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
