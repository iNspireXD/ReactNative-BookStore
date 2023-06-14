import { StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "../../constants/style";

type Props = {
  children: React.ReactNode;
  onPress: any;
  style?: object;
  mode?: string;
};

const GoalItems = ({ children, onPress, style, mode }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style, pressed && styles.pressed]}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    padding: 8,
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
