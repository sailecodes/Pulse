import { Tabs } from "expo-router";
import TabBarIcon from "@/components/tab-bar-icon";
import { icons } from "@/constants";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          // backgroundColor: "#f3e8ff",
          paddingBottom: 20,
          marginHorizontal: 5,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              activeIcon={icons.homeActive}
              inactiveIcon={icons.homeInactive}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="create"
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              activeIcon={icons.profileActive}
              inactiveIcon={icons.profileInactive}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
