import { createSettingsStyles } from "@/assets/styles/settings.style";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

const Notes = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.notesText}>Hello Users👋,</Text>
      <Text style={settingsStyles.notesText}>
        Please feel free to put your tank dimensions if not correctly included.
      </Text> 
    </LinearGradient>
  );
};

export default Notes;
