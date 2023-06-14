import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "../components/ui/Button";
import { Colors } from "../constants/style";

type Props = {};

const LandingScreen = (props: Props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.imgContainer}>
          <Image source={require("../assets/logo.png")} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              console.log("button Pressed");
            }}
            style={{ backgroundColor: Colors.accent100, borderRadius: 8 }}
          >
            <Text>Login</Text>
          </Button>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerButtonContainer}>
          <Button
            onPress={() => {}}
            style={{ backgroundColor: Colors.background100, borderRadius: 8 }}
          >
            <Text style={styles.buttonText}>Sign in with google</Text>
          </Button>
        </View>
        <Text>
          By clicking on login you agree to our
          <Text> Terms of Service </Text>
          and
          <Text> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerContainer: {
    marginTop: 24,
    alignItems: "center",
    marginHorizontal: 24,
    padding: 6,
  },
  imgContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 80,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  buttonContainer: {
    width: 360,
  },

  footerButtonContainer: {
    marginHorizontal: 24,
    marginVertical: 50,
  },

  footer: {
    backgroundColor: Colors.primary200,
    height: 250,
    width: "100%",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});
