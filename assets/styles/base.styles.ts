import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createBaseStyles = (colors: ColorScheme) => {
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
      paddingBottom: 120,
    },
  });

  return styles;
};
