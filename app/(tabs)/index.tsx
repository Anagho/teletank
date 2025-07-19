import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { ScrollView, Text, View, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import TankSelection from "@/components/TankSelection";

export default function Index() {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} backgroundColor={colors.bg} />
      <Header />

      <ScrollView
        style={homeStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TankSelection />
      </ScrollView>
    </LinearGradient>
  );
}
