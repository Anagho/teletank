import { View, Text, Pressable } from "react-native";
import { Tank, tanks } from "@/constants/tankData";
import { Ionicons, Feather } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { router } from "expo-router";

const TankSelection = () => {
  const { colors, isDarkMode } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const cylindricalTanks = tanks.filter((tank) => tank.type === "cylindrical");
  const rectangularTanks = tanks.filter((tank) => tank.type === "rectangular");

  const handleTankPress = (tank: Tank) =>
    router.push({ pathname: "./form", params: { id: tank.id } });

  const TankCard = ({ item }: { item: Tank }) => {
    const iconColor = isDarkMode ? colors.textMuted : colors.text;
    const textColor = isDarkMode ? colors.textMuted : colors.text;

    return (
      <Pressable style={homeStyles.card} onPress={() => handleTankPress(item)}>
        {item.type === "rectangular" ? (
          <Ionicons name="cube-outline" size={60} color={iconColor} />
        ) : (
          <Feather
            name="database"
            size={60}
            color={iconColor}
            style={
              item.orientation === "horizontal"
                ? { transform: [{ rotate: "90deg" }] }
                : { transform: [{ rotate: "0deg" }] }
            }
          />
        )}
        <Text style={[homeStyles.label, { color: textColor }]}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <Text style={homeStyles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={homeStyles.container}>
      {/* CYLINDRICAL TANKS SECTION */}
      <View style={homeStyles.tankSection}>
        <Text style={homeStyles.sectionHeader}>Cylindrical Tanks</Text>
        <View style={homeStyles.grid}>
          {cylindricalTanks.map((tank) => (
            <TankCard key={tank.id} item={tank} />
          ))}
        </View>
      </View>

      {/* RECTANGULAR TANKS SECTION */}
      <View style={homeStyles.tankSection}>
        <Text style={homeStyles.sectionHeader}>Rectangular Tanks</Text>
        <View style={homeStyles.grid}>
          {rectangularTanks.map((tank) => (
            <TankCard key={tank.id} item={tank} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default TankSelection;
