import {
  Alert,
  View,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect, useRef } from "react";
import { tanks, Tank } from "@/constants/tankData";
import useTheme from "@/hooks/useTheme";
import { createBaseStyles } from "@/assets/styles/base.styles";
import { createFormStyles } from "@/assets/styles/form.styles";
import { LinearGradient } from "expo-linear-gradient";

import {
  horizontalCylinderVolume,
  verticalCylinderVolume,
  rectangularVolume,
} from "@/utils/VolumeCalculations";

import FormCard from "@/components/FormCard";
import ResultCard, { ResultData } from "@/components/ResultCard";

const TankFormScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { colors } = useTheme();
  const baseStyles = createBaseStyles(colors);
  const formStyles = createFormStyles(colors);

  const [selectedTank, setSelectedTank] = useState<Tank | null>(null);

  const [dip, setDip] = useState("");

  const [length, setLength] = useState("");
  const [diameter, setDiameter] = useState("");

  const [rectLength, setRectLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [result, setResult] = useState<ResultData | null>(null);

  const scrollViewRef = useRef<ScrollView>(null);
  const resultCardRef = useRef<View>(null);

  useEffect(() => {
    const tank: Tank | undefined = Object.values(tanks).find(
      (t) => t.id === id
    );

    if (tank) {
      setSelectedTank(tank);
      if (tank.type === "cylindrical") {
        if (tank.orientation === "horizontal") {
          setLength(String(tank.length || ""));
          setDiameter(String(tank.diameter || ""));
        } else if (tank.orientation === "vertical") {
          setDiameter(String(tank.diameter || ""));
          setLength(String(tank.length || ""));
        }
      } else if (tank.type === "rectangular") {
        setRectLength(String(tank.length || ""));
        setWidth(String(tank.width || ""));
        setHeight(String(tank.height || ""));
      }
      setDip("");
    }
  }, [id]);

  const handleCalculate = () => {
    if (!selectedTank || !dip.trim()) return;

    const dipCm = parseFloat(dip);
    let result: any = null;

    if (selectedTank.type === "cylindrical") {
      const diameterCm = parseFloat(diameter);
      const lengthOrHeightCm = parseFloat(length);

      if (selectedTank.orientation === "horizontal") {
        result = horizontalCylinderVolume(lengthOrHeightCm, diameterCm, dipCm);
      } else if (selectedTank.orientation === "vertical") {
        result = verticalCylinderVolume(diameterCm, lengthOrHeightCm, dipCm);
      }
    } else if (selectedTank.type === "rectangular") {
      const lengthCm = parseFloat(rectLength);
      const widthCm = parseFloat(width);
      const heightCm = parseFloat(height);

      if (isNaN(lengthCm) || isNaN(widthCm) || isNaN(heightCm)) {
        Alert.alert(
          "Error",
          "Please provide valid dimensions for the rectangular tank."
        );
        return;
      }

      if (dipCm > heightCm) {
        Alert.alert("Error", "Dip cannot be greater than tank height.");
        return;
      }

      result = rectangularVolume(lengthCm, widthCm, heightCm, dipCm);
    }

    if (result?.error) {
      Alert.alert("Error", result.error);
      return;
    }

    Keyboard.dismiss();

    setResult(result);
  };

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={baseStyles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={baseStyles.scrollView}
            contentContainerStyle={formStyles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <FormCard
              selectedTank={selectedTank}
              dip={dip}
              setDip={setDip}
              length={length}
              setLength={setLength}
              diameter={diameter}
              setDiameter={setDiameter}
              rectLength={rectLength}
              setRectLength={setRectLength}
              width={width}
              setWidth={setWidth}
              height={height}
              setHeight={setHeight}
              onCalculate={handleCalculate}
            />

            {result && selectedTank && (
              <View ref={resultCardRef} style={{ marginTop: 20 }}>
                <ResultCard result={result} />
              </View>
            )}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default TankFormScreen;
