import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  // const [fontsLoaded] = useFonts(customFonts);

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) return null;

  return (
    <>
      <Slot />
      <StatusBar style="light" />
    </>
  );
}
