import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Dummy = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

  return <Redirect href="/(onboarding)" />;
};

export default Dummy;
