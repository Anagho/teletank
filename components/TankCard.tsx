import { TouchableOpacity, Text } from "react-native";
import { Tank } from "@/constants/tankData";
import { Ionicons, Feather } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { createTankStyles } from "@/assets/styles/tank.styles";

interface TankProps {
  tank: Tank;
  onPress: () => void;
}

const TankCard = ({ tank, onPress }: TankProps) => {
  const { colors, isDarkMode } = useTheme();
  const tankStyles = createTankStyles(colors);

  const iconColor = isDarkMode ? colors.textMuted : colors.text;
  const textColor = isDarkMode ? colors.textMuted : colors.text;

  return (
    <TouchableOpacity style={tankStyles.card} onPress={onPress}>
      {tank.type === "rectangular" ? (
        <Ionicons name="cube-outline" size={40} color={iconColor} />
      ) : (
        <Feather name="database" size={40} color={iconColor} />
      )}

      <Text style={[tankStyles.label, { color: textColor }]}>
        {tank.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TankCard;
