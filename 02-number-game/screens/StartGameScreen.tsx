import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import Card from "../components/common/Card";
import CommonButton from "../components/common/CommonButton";
import InstructionText from "../components/common/InstructionText";
import Title from "../components/common/Title";
import colors from "../constants/colors";
import checkInvalidNumber from "../utils/checkInvalidNumber";

export type StartGameScreenProps = {
  onPickNumber: (value: number) => void;
};

export default function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height } = useWindowDimensions();

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const confirmHandler = () => {
    if (checkInvalidNumber(+enteredNumber)) {
      Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    onPickNumber(+enteredNumber);
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: height < 400 ? 30 : 100 }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              value={enteredNumber}
              maxLength={2}
              keyboardType='number-pad'
              onChangeText={(enteredNumber) => setEnteredNumber(enteredNumber)}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <CommonButton onPress={resetHandler}>Reset</CommonButton>
              </View>
              <View style={styles.button}>
                <CommonButton onPress={confirmHandler}>Confirm</CommonButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.yellow,
    color: colors.yellow,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
});
