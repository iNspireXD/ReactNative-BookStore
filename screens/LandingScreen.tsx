import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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

        <Button
          onPress={() => {
            console.log("button Pressed");
          }}
          style={styles.buttonContainer}
        >
          Login
        </Button>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpLinkText}>Create a new user.</Text>
          </TouchableOpacity>
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
        <Text style={styles.info}>
          By clicking on login you agree to our
          <Text style={styles.boldText}> Terms of Service </Text>
          and
          <Text style={styles.boldText}> Privacy Policy.</Text>
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
    backgroundColor: Colors.accent100,
    borderRadius: 8,
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

  info: {
    color: "white",
    marginHorizontal: 32,
    textAlign: "center",
  },

  boldText: {
    fontWeight: "bold",
  },

  signUpContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
  },

  signUpText: {
    color: "grey",
  },
  signUpLinkText: {
    color: Colors.accent100,
    fontWeight: "bold",
  },
});
