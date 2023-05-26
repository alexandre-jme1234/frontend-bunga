import { VStack, Text } from "native-base";
import { Button, StyleSheet, View, TextInput } from "react-native";
import InputMail from "../components/InputMail";
import LotWeek from "../components/LotWeek";

export default function PlageDateScreen(props) {
  console.log("props plageDate", props);
  return (
    <View style={styles.background}>
      <VStack
        space={1}
        alignItems="flex-start"
        paddingLeft="10"
        marginBottom="5"
        marginTop="5"
      >
        <Text bold fontSize="sm">
          Contacter le bailleur
        </Text>
        <Text fontSize="xs">
          Pour entamer les négociations avec le propriétaire de bungalows.
          Sélectionner les lots de bungalows.
        </Text>
      </VStack>
      <VStack style={styles.containerPlageData}>
      
        <VStack style={styles.plageData}>
          <LotWeek {...props} />
        </VStack>
      </VStack>
      <VStack
        space={1}
        alignItems="flex-start"
        paddingLeft="10"
        marginBottom="5"
        marginTop="5"
      >
        <Text bold fontSize="sm">
          Clôturer votre réservation
        </Text>
        <Text fontSize="xs">Renseigner votre e-mail pour contacter</Text>
      </VStack>
      <TextInput placeholder="inout value here" />
      <Button
        title="Go to Congratulation"
        onPress={() => props.navigation.navigate("Congratulation")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  containerPlageData: {
    padding: 30,
    height: "60%",
    width: "80%",
    backgroundColor: "#F8F8F8",
    borderRadius: "15",
  },
  plageData: {
    height: "10%",
    width: "100%",
    backgroundColor: "#EAEAEA",
    borderRadius: "10",
  },
});
