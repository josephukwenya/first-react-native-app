import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Image, {
      source: require("../../assets/images/myphoto.jpg"),
      style: styles.image,
    }),
    React.createElement(
      Text,
      { style: styles.title },
      "Welcome to My Mobile App"
    ),
    React.createElement(
      Text,
      { style: styles.subtitle },
      "Built with React Native + TypeScript"
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});