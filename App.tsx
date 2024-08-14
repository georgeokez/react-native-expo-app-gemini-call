// import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Welcome from "./Components/Welcome";
import useGemini from "./Components/hooks/useGemini";

export default function App() {
  const { text, loading, error, fetchGeminiText } = useGemini(
    "Suggests 5 Dog names?"
  );
  console.log("Text: ", text);
  console.log("loading: ", loading);
  return (
    <View style={styles.container}>
      <Welcome />
      <Button title='Fetch Text' onPress={fetchGeminiText} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Something Went Wrong!</Text>}
      {text && <Text>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
