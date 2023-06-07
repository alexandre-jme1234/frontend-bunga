import { Button, StyleSheet, Text, View } from "react-native";
import { Box, Input } from "native-base";
import Search from "../components/Search";

// Renvoie le composant Search avec une propriété navigation
export default function SelectionScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Search navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F8FFFF",
    width: "100%",
    height: "100%",
  },
});
