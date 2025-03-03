import { Stack } from "expo-router";
import "expo-dev-client";
import "@/global.css";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
    </Stack>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
    </>
  );
}
