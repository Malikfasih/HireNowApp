import { Stack } from "expo-router/stack";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SplashScreen } from "expo-router";

// SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]); // only want to show the home page if fonts are loaded.

  if (!fontsLoaded) return null;

  // return <Stack onlayout={onLayoutRootView} />;
  return <Stack />;
};

export default Layout;
