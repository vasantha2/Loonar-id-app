import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12208A",
    alignItems: "center",
    justifyContent: "center",
  },
});
