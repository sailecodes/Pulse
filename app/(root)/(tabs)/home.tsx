import { images } from "@/constants";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 pt-10"
      edges={["top"]}>
      <ScrollView>
        {/* Profile */}
        <View className="mx-5 mb-10">
          <View className="self-end bg-neutral-300 w-[40px] h-[40px] rounded-full" />
        </View>

        {/* Today's tasks */}
        <View className="flex-row bg-purple-600 h-[150px] rounded-xl mx-5 mb-10">
          <View className="flex-1 p-5 justify-between">
            <Text className="font-RHDSemiBold text-neutral-100 text-lg">
              Get started on your tasks for today!
            </Text>
            <TouchableOpacity className="justify-center items-center bg-neutral-100 py-2 rounded-se-xl">
              <Text className="font-RHDBold text-purple-600 text-xl">View tasks</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1" />
        </View>

        {/* In progress tasks */}
        <View className="mb-10">
          <View className="flex-row items-center gap-2 mx-5 mb-5">
            <Text className="font-RHDBold text-neutral-800 text-2xl">In progress</Text>
            <View className="justify-center items-center bg-purple-200 w-6 h-6 rounded-xl">
              <Text className="font-RHDMedium text-purple-600">10</Text>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={{ paddingLeft: 18, paddingRight: 18, gap: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity className="justify-between bg-blue-200/50 w-[230px] h-[135px] px-5 py-4 rounded-2xl">
              <View className="flex-row justify-between items-center">
                <Text className="font-RHDMedium text-neutral-500">Church</Text>
                <View className="self-end bg-neutral-300 w-[30px] h-[30px] rounded-xl" />
              </View>
              <Text className="bottom-1 font-RHDSemiBold text-neutral-800 text-xl">
                Think of topics for Genesis
              </Text>
              <View className="bg-white h-2 rounded-full" />
            </TouchableOpacity>

            <TouchableOpacity className="justify-between bg-orange-200/50 w-[220px] h-[135px] px-5 py-4 rounded-2xl">
              <View className="flex-row justify-between items-center">
                <Text className="font-RHDMedium text-neutral-500">Work</Text>
                <View className="self-end bg-neutral-300 w-[30px] h-[30px] rounded-xl" />
              </View>
              <Text className="bottom-1 font-RHDSemiBold text-neutral-800 text-xl">
                Do something useful
              </Text>
              <View className="bg-white h-2 rounded-full" />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Task groups */}
        <View className="mb-10">
          <View className="flex-row items-center gap-2 mx-5 mb-5">
            <Text className="font-RHDBold text-neutral-800 text-2xl">Task groups</Text>
            <View className="justify-center items-center bg-purple-200 w-6 h-6 rounded-xl">
              <Text className="font-RHDMedium text-purple-600">5</Text>
            </View>
          </View>

          <View className="gap-[15px] px-5">
            <TouchableOpacity className="flex-row justify-between items-center bg-white h-[75px] px-5 rounded-2xl">
              <View className="flex-row items-center gap-3">
                <View className="bg-neutral-300 w-[40px] h-[40px] rounded-xl" />
                <View>
                  <Text className="font-RHDSemiBold text-neutral-800 text-xl">Church</Text>
                  <Text className="font-RHDSemiBold text-neutral-500">3 tasks</Text>
                </View>
              </View>
              <View className="w-[45px] h-[45px] bg-neutral-300 rounded-full" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row justify-between items-center bg-white h-[75px] px-5 rounded-2xl">
              <View className="flex-row items-center gap-3">
                <View className="bg-neutral-300 w-[40px] h-[40px] rounded-xl" />
                <View>
                  <Text className="font-RHDSemiBold text-neutral-800 text-xl">Church</Text>
                  <Text className="font-RHDSemiBold text-neutral-500">3 tasks</Text>
                </View>
              </View>
              <View className="w-[45px] h-[45px] bg-neutral-300 rounded-full" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center bg-white h-[75px] px-5 rounded-2xl">
              <View className="flex-row items-center gap-3">
                <View className="bg-neutral-300 w-[40px] h-[40px] rounded-xl" />
                <View>
                  <Text className="font-RHDSemiBold text-neutral-800 text-xl">Church</Text>
                  <Text className="font-RHDSemiBold text-neutral-500">3 tasks</Text>
                </View>
              </View>
              <View className="w-[45px] h-[45px] bg-neutral-300 rounded-full" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
