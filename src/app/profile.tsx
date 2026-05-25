import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, { style: styles.text }, "Name: Your Name"),
    React.createElement(Text, { style: styles.text }, "Department: Computer Science"),
    React.createElement(Text, { style: styles.text }, "Level: 300"),
    React.createElement(Text, { style: styles.text }, "Skills: React Native, TypeScript"),
    React.createElement(Text, { style: styles.text }, "Email: youremail@gmail.com")
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    marginBottom: 15,
  },
});