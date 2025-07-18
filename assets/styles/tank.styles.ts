import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createTankStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    card: {
      width: "30%",
      padding: 12,
      alignItems: "center",
      marginBottom: 16,
    },
    label: {
      fontSize: 12,
      textAlign: "center",
      marginTop: 16,
    },
  });

  return styles;
};
