import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createHomeStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 20,
      gap: 20,
      paddingBottom: 120
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: "500",
      color: colors.text,
    },
    header: {
      paddingHorizontal: 24,
      paddingVertical: 24,
      marginTop: 20,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    titleTextContainer: {
      flex: 1,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      letterSpacing: -1,
      marginBottom: 4,
      color: colors.text,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.textMuted,
    },

    // Tank Section Styles
    tankSection: {
      backgroundColor: colors.surface,
      paddingHorizontal: 16,
      marginTop: 12,
      paddingBottom: 20,
    },
    sectionHeader: {
      fontSize: 24,
      fontWeight: 500,
      marginTop: 16,
      marginBottom: 20,
      color: colors.text,
    },
     card: {
      width: "30%",
      padding: 4,
      alignItems: "center",
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      textAlign: "center",
      marginTop: 16,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 4,
      paddingBottom: "auto"
    },
  });

  return styles;
};
