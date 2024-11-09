import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
    </Tabs>
  );
};

export default Layout;
