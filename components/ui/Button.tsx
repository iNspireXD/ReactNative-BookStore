import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../constants/style";

type Props = {
  children: React.ReactNode;
  onPress: any;
  mode?: string;
  style: object;
  icon?: string;
};

const Button = ({ children, onPress, mode, style }: Props) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} android_ripple={{ color: "#6f657d" }}>
        <View style={styles.button}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.accent100,
    borderRadius: 8,
  },
  button: {
    padding: 8,
  },
  text: {
    color: Colors.background100,
    padding: 14,
    fontSize: 16,
    textAlign: "center",
  },
});
