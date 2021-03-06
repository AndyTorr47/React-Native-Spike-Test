import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import SignUpScreen from "./src/screens/SignUpScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignUpScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
