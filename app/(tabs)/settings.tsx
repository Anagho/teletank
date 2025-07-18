import { createSettingsStyles } from "@/assets/styles/settings.style";
import Notes from "@/components/Notes";
import Preferences from "@/components/Preferences";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView style={settingsStyles.safeArea}>
        {/* HEADER */}
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.iconContainer}
            >
              <Ionicons name="construct" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* PREFERENCES */}
          <Preferences />

          {/* NOTES */}
          <Notes />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingsScreen;
