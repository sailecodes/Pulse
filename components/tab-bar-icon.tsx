import { View, Image } from "react-native";

const TabBarIcon = ({ activeIcon, inactiveIcon, focused }) => {
  return (
    <Image
      className="w-[30px] h-[30px] text-neutral-500 text-purple-300"
      source={focused ? activeIcon : inactiveIcon}
    />
  );
};

export default TabBarIcon;
