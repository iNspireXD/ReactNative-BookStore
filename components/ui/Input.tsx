import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

type Props = {
  keyboardType?: any;
  label: string;
  secure: any;
  onUpdateValue: any;
  value: any;
  isInvalid: boolean;
};

const Input = ({
  keyboardType,
  label,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={label}
        style={styles.textInput}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    height: 74,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    borderRadius: 8,
  },
  textInput: {
    margin: 18,
    fontSize: 18,
  },
});
