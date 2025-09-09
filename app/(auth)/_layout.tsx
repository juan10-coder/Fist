import { Stack } from "expo-router";

export default function LayoutAuth() {
  return (
    <Stack
      initialRouteName="welcome"
      screenOptions={{ headerShown: false }} // 👈 esto quita la barra de navegación
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="recover" />
      <Stack.Screen name="register" />
      <Stack.Screen name="welcome" />
    </Stack>
  );
}
