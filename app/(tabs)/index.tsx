import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { createBaseStyles } from "@/assets/styles/base.styles";
import TankSelection from "@/components/TankSelection";

export default function Index() {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);
  const baseStyles = createBaseStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar
        barStyle={colors.statusBarStyle}
        backgroundColor={colors.bg}
        translucent={false}
      />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />

        {/* Home screen contents */}

        <ScrollView>
          {/* SELECT TANK TYYPE WITH CATEGORIES GOES HERE */}
          <TankSelection />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
