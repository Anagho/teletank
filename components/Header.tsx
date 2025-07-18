import { View, Text } from "react-native";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name="cube" size={32} color="#fff" />
        </LinearGradient>

        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Liquid Tanks 👷‍♂️</Text>
          <Text style={homeStyles.subtitle}>
            Fuel check - Dip . Tap . Done.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
