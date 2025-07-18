import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createResultStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
      section: {
      borderRadius: 20,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8, // elevation is used to create a shadow on the section, in android
    },
    resultTitle: {
      fontSize: 20,
      fontWeight: "700",
      marginBottom: 20,
      color: colors.text,
    },
     resultContainer: {
       gap: 16,
    },
    resultCard: {
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      borderRadius: 16,
      borderLeftWidth: 4,
    },
    resultIconContainer: {
      marginRight: 16,
    },
     resultIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
      resultNumber: {
      fontSize: 28,
      fontWeight: "800",
      letterSpacing: -1,
      color: colors.text,
    },
    resultLabel: {
      fontSize: 14,
      fontWeight: "600",
      marginTop: 2,
      color: colors.textMuted,
    },
  });

  return styles;
};
