import { View, Text, StyleSheet, Alert } from "react-native";
import TankCard from "./TankCard";
import { tanks, Tank } from "@/constants/tankData";
import useTheme from "@/hooks/useTheme";
import { createBaseStyles } from "@/assets/styles/base.styles";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { router } from "expo-router";

const TankSelection = () => {
  const { colors } = useTheme();
  const baseStyles = createBaseStyles(colors);
  const homeStyles = createHomeStyles(colors);

  const cylindricalTanks = Object.values(tanks).filter(
    (tank) => tank.type === "cylindrical"
  ) as Tank[];

  const rectangularTanks = Object.values(tanks).filter(
    (tank) => tank.type === "rectangular"
  ) as Tank[];

  const handlePress = (tank: Tank) => {
    router.push({ pathname: "./form", params: { id: tank.id } });

  };

  return (
    <View style={baseStyles.container}>
      {/* CYLINDRICAL TANKS SECTION */}
      <View style={homeStyles.tankSection}>
        <Text style={homeStyles.sectionHeader}>Cylindrical Tanks</Text>
        <View style={homeStyles.grid}>
          {cylindricalTanks.map((tank) => (
            <TankCard
              key={tank.id}
              tank={tank}
              onPress={() => handlePress(tank)}
            />
          ))}
        </View>
      </View>

      {/* RECTANGULAR TANKS SECTION */}
      <View style={homeStyles.tankSection}>
        <Text style={homeStyles.sectionHeader}>Rectangular Tanks</Text>
        <View style={homeStyles.grid}>
          {rectangularTanks.map((tank) => (
            <TankCard
              key={tank.id}
              tank={tank}
              onPress={() => handlePress(tank)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default TankSelection;
