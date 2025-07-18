import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "@/hooks/useTheme";
import { createResultStyles } from "@/assets/styles/result.styles";
import { Ionicons } from "@expo/vector-icons";

export interface ResultData {
  capacity: string;
  inside: string;
  missing: string;
  percentFull: string;
}

interface ResultCardProps {
  result: ResultData;
}

function ResultCard({ result }: ResultCardProps) {
  const { colors } = useTheme();
  const resultStyles = createResultStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={resultStyles.section}
    >
      <Text style={resultStyles.resultTitle}>Result</Text>

      <View style={resultStyles.resultContainer}>
        {/* Diesel Level */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[resultStyles.resultCard, { borderLeftColor: colors.primary }]}
        >
          <View style={resultStyles.resultIconContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={resultStyles.resultIcon}
            >
              <Ionicons name="water-outline" size={20} color="#fff" />
            </LinearGradient>
          </View>
          <View>
            <Text style={resultStyles.resultNumber}>
              {result.inside} Litres
            </Text>
            <Text style={resultStyles.resultLabel}>Diesel Level</Text>
          </View>
        </LinearGradient>

        {/* Tank Capacity */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[
            resultStyles.resultCard,
            { borderLeftColor: colors.secondary },
          ]}
        >
          <View style={resultStyles.resultIconContainer}>
            <LinearGradient
              colors={colors.gradients.secondary}
              style={resultStyles.resultIcon}
            >
              <Ionicons name="cube" size={20} color="#fff" />
            </LinearGradient>
          </View>
          <View>
            <Text style={resultStyles.resultNumber}>
              {result.capacity} Litres
            </Text>
            <Text style={resultStyles.resultLabel}>Tank Capacity</Text>
          </View>
        </LinearGradient>

        {/* Missing Volume */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[resultStyles.resultCard, { borderLeftColor: colors.warning }]}
        >
          <View style={resultStyles.resultIconContainer}>
            <LinearGradient
              colors={colors.gradients.warning}
              style={resultStyles.resultIcon}
            >
              <Ionicons name="alert-circle" size={20} color="#fff" />
            </LinearGradient>
          </View>
          <View>
            <Text style={resultStyles.resultNumber}>
              {result.missing} Litres
            </Text>
            <Text style={resultStyles.resultLabel}>Missing Litres</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

export default ResultCard;
