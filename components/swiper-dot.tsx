import { View } from "react-native";

const SwiperDot = ({ isActive }: { isActive?: boolean }) => {
  return (
    <View
      className={`
        h-[5px] w-[35px] mx-1 rounded-md
        ${isActive ? "bg-purple-500" : "bg-purple-200"}  
      `}
    />
  );
};

export default SwiperDot;
