import useTheme, { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

function InnerLayout() {
  const { colors } = useTheme();

  return ( 
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="form"
        options={{
          title: "Calculate Volume",
          headerStyle: { backgroundColor: colors.bg },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: colors.text,
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <InnerLayout />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
