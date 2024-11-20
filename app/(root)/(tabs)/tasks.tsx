import ReactNativeCalendarStrip from "react-native-calendar-strip";
import React, { useRef } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

const CalendarStrip = () => {
  const calendarStripRef = useRef<ReactNativeCalendarStrip>(null);

  const currDate = new Date();

  return (
    <ReactNativeCalendarStrip
      scrollable
      ref={calendarStripRef}
      // Main containers styles
      style={{ height: 110, marginBottom: 20 }}
      innerStyle={{ flex: 1 }}
      // Header styles
      calendarHeaderContainerStyle={{ alignSelf: "flex-start", marginLeft: 20 }}
      calendarHeaderStyle={{
        color: "#e7e7e7",
        fontFamily: "RedHatDisplay-Bold",
        fontSize: 24,
        fontWeight: "700",
      }}
      // Day styles
      dayContainerStyle={{ gap: 5 }}
      dateNameStyle={{ color: "#717171", fontWeight: "500" }}
      dateNumberStyle={{ color: "#e7e7e7", fontWeight: "500" }}
      highlightDateContainerStyle={{
        backgroundColor: "#e7e7e7",
        width: 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
      highlightDateNameStyle={{ color: "#282828", fontWeight: "500" }}
      highlightDateNumberStyle={{ color: "#121212", fontWeight: "500" }}
      // Others
      shouldAllowFontScaling={false}
      startingDate={currDate}
      selectedDate={currDate}
      leftSelector={[]}
      rightSelector={[]}
    />
  );
};

const HomeTaskModule = ({
  category,
  title,
  date,
  time,
  priority,
}: {
  category: string;
  title: string;
  date: any;
  time?: any;
  priority: "Low" | "Medium" | "High";
}) => {
  return (
    <TouchableOpacity className="bg-[#282828] justify-between gap-4 w-full rounded-[10px] p-5">
      <Text className="text-[#e7e7e7] font-RHDRegular">{category}</Text>
      <View className="gap-1">
        <Text className="text-[#e7e7e7] font-RHDMedium text-2xl">{title}</Text>
        <View className="flex-row">
          <Image
            className="h-6 w-6"
            source={icons.calendar}
            tintColor="#e7e7e7"
          />
          <Text className="text-[#e7e7e7] font-RHDRegular ml-2">{date}</Text>
          {time && (
            <Text className="text-[#e7e7e7] font-RHDRegular">
              {" \u00B7"} {time}
            </Text>
          )}
        </View>
      </View>
      <View
        className={`self-start px-3 py-1 rounded-[6px]
        ${
          priority === "Low"
            ? "bg-green-200"
            : priority === "Medium"
            ? "bg-yellow-200"
            : "bg-red-200"
        }
      `}>
        <Text className="text-[#121212]">{priority}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Tasks = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <CalendarStrip />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
        <HomeTaskModule
          category="Daily"
          title="Go do something productive"
          date="June 21"
          time="8:00PM"
          priority="Medium"
        />
        <HomeTaskModule
          category="Work"
          title="Submit new AI model"
          date="December 5"
          priority="High"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
