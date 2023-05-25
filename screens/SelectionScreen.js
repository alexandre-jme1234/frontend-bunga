import { Button, StyleSheet, Text, View } from "react-native";
import { Box, Input } from "native-base";
import Search from "../components/Search";

export default function SelectionScreen({ navigation }) {

 return (
  <View style={styles.background}>
     <Text>Selection Screen</Text>
     <Search navigation={navigation} />
     {/* <Button
       title="Go to Home"
       onPress={() => navigation.navigate('TabNavigator')}
     /> */}
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
