import { createFormStyles } from "@/assets/styles/form.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { Tank } from "@/constants/tankData";

interface FormCardProps {
  selectedTank: Tank | null;
  dip: string;
  setDip: (value: string) => void;
  length: string;
  setLength: (value: string) => void;
  diameter: string;
  setDiameter: (value: string) => void;
  rectLength: string;
  setRectLength: (value: string) => void;
  width: string;
  setWidth: (value: string) => void;
  height: string;
  setHeight: (value: string) => void;
  onCalculate: () => void;
}

const FormCard = (props: FormCardProps) => {
  const {
    selectedTank,
    dip,
    setDip,
    length,
    setLength,
    diameter,
    setDiameter,
    rectLength,
    setRectLength,
    width,
    setWidth,
    height,
    setHeight,
    onCalculate,
  } = props;

  const { colors } = useTheme();
  const formStyles = createFormStyles(colors);

  if (!selectedTank) return null;

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={formStyles.section}
    >
      <Text style={formStyles.subtitle}>
        {selectedTank.type}{" "}
        {selectedTank.tankFactor &&
          `- Tank factor: (${selectedTank.tankFactor})`}
      </Text>
      <Text style={formStyles.sectionTitle}>{selectedTank.name}</Text>

      <Text style={formStyles.label}>Dip Level (cm)</Text>
      <TextInput
        style={formStyles.input}
        keyboardType="numeric"
        value={dip}
        onChangeText={setDip}
        placeholder="Enter dip level"
        placeholderTextColor={colors.textMuted}
        autoFocus
      />

      {selectedTank.type === "rectangular" && (
        <>
          <Text style={formStyles.label}>Length (cm)</Text>
          <TextInput
            style={formStyles.input}
            value={rectLength}
            onChangeText={setRectLength}
            keyboardType="numeric"
          />
          <Text style={formStyles.label}>Width (cm)</Text>
          <TextInput
            style={formStyles.input}
            value={width}
            onChangeText={setWidth}
            keyboardType="numeric"
          />
          <Text style={formStyles.label}>Height (cm)</Text>
          <TextInput
            style={formStyles.input}
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
        </>
      )}

      {selectedTank.type === "cylindrical" &&
        selectedTank.orientation === "horizontal" && (
          <>
            <Text style={formStyles.label}>Length (cm)</Text>
            <TextInput
              style={formStyles.input}
              value={length}
              onChangeText={setLength}
              keyboardType="numeric"
            />
            <Text style={formStyles.label}>Diameter (cm)</Text>
            <TextInput
              style={formStyles.input}
              value={diameter}
              onChangeText={setDiameter}
              keyboardType="numeric"
            />
          </>
        )}

      {selectedTank.type === "cylindrical" &&
        selectedTank.orientation === "vertical" && (
          <>
            <Text style={formStyles.label}>Diameter (cm)</Text>
            <TextInput
              style={formStyles.input}
              value={diameter}
              onChangeText={setDiameter}
              keyboardType="numeric"
            />
            <Text style={formStyles.label}>Height (cm)</Text>
            <TextInput
              style={formStyles.input}
              value={length}
              onChangeText={setLength}
              keyboardType="numeric"
            />
          </>
        )}

      <TouchableOpacity
        onPress={onCalculate}
        activeOpacity={0.8}
        disabled={!dip.trim()}
      >
        <LinearGradient
          colors={
            dip.trim() ? colors.gradients.success : colors.gradients.muted
          }
          style={[
            formStyles.calculateButton,
            !dip.trim() && formStyles.calculateButtonDisabled,
          ]}
        >
          <Text style={formStyles.calculateButtonText}>Calculate</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FormCard;
