import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { Text } from "react-native";
import { router } from "expo-router";
import CustomButton from "@/components/custom-button";
import SwiperDot from "@/components/swiper-dot";

const dummy = ["hello", "world", "goodbye"];

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [swiperInd, setSwiperInd] = useState(0);

  const onSwiperBtnPress = () => {
    if (swiperInd === dummy.length - 1) {
      router.navigate("/(onboarding)");
    } else {
      setSwiperInd(swiperInd + 1);
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-between">
      <Swiper
        ref={swiperRef}
        dot={<SwiperDot />}
        activeDot={<SwiperDot isActive />}
        onIndexChanged={(ind) => setSwiperInd(ind)}
        loop={false}>
        {dummy.map((d, ind) => (
          <Text key={ind}>{ind}</Text>
        ))}
      </Swiper>
      <CustomButton
        className="absolute bottom-[90px]"
        isPrimary
        text={swiperInd === dummy.length - 1 ? "Get started" : "Next"}
        onPress={onSwiperBtnPress}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
