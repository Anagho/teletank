import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createFormStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    content: {
      paddingHorizontal: 16,
      gap: 20,
      paddingBottom: 120,
    },
    section: {
      marginTop: 24,
      borderRadius: 10,
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
    sectionTitle: {
      fontSize: 20,
      fontWeight: "700",
      marginBottom: 20,
      letterSpacing: -0.5,
      color: colors.text,
    },
       subtitle: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.textMuted,
    },

    label: {
      fontSize: 16,
      marginTop: 12,
      color: colors.text,
      fontWeight: "500",
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      padding: 10,
      marginTop: 6,
      color: colors.text,
      backgroundColor: colors.surface,
    },
    title: {
      fontSize: 24,
      fontWeight: "600",
      letterSpacing: -1,
      marginBottom: 4,
      color: colors.text,
      textAlign: "center",
    },
    calculateButton: {
      backgroundColor: colors.success,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20,
    },
    calculateButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
    calculateButtonDisabled: {
      opacity: 0.5,
    },
  });

  return styles;
};
