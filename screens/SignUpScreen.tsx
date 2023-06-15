import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/style";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { StackNavigationProp } from "@react-navigation/stack";
type Props = {
  navigation: StackNavigationProp<any, any>;
};

const SignUpScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headingContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/Foxlearn.png")}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.headerText}>Create an Account</Text>
      </View>

      {/* signup form fields */}

      <Input label="Full Name" />
      <Input label="Enter your email" keyboardType="email-address" />
      <Input label="Password" secure />
      <Input label="Confirm Password" secure />

      <Text style={styles.info}>
        By Creating an account you accept the Terms & Condition of the Company
      </Text>

      <Button
        onPress={() => {}}
        style={{ backgroundColor: Colors.accent100, borderRadius: 8 }}
      >
        Register
      </Button>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.loginLinkText}>Login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 24,
    padding: 6,
  },
  headingContainer: {
    marginTop: 80,
  },

  imageContainer: {
    overflow: "hidden",
    width: 100,
    height: 100,
  },

  img: {
    width: "100%",
    height: "100%",
  },
  headerText: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary100,
  },
  info: {
    color: "#3C3C43",
    marginBottom: 6,
  },

  loginContainer: {
    marginTop: 8,
    flexDirection: "row",
    gap: 4,
  },

  loginText: {
    color: "grey",
  },

  loginLinkText: {
    color: Colors.accent100,
    fontWeight: "bold",
  },
});
