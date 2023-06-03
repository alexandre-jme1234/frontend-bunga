import { VStack } from "native-base";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  TextInput,
  Text,
} from "react-native";
import LotWeek from "../components/LotWeek";

export default function PlageDateScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <VStack
        space={1}
        alignItems="flex-start"
        justifyContent='space-around'
        paddingLeft="5"
        marginBottom="5"
        marginTop="5"
      >
        <Text style={styles.title}>Contacter le bailleur</Text>
        <Text>
          Pour entamer les négociations avec le propriétaire de bungalows.
          Sélectionner les lots de bungalows.
        </Text>
      <VStack style={styles.containerPlageData}>
        <VStack style={styles.plageData}>
          <LotWeek {...props} />
        </VStack>
      </VStack>
      <VStack
        space={1}
        alignItems='flex-start'
        marginBottom="5"
      >
        <Text style={styles.title}>Finir la réservation</Text>
        <Text>Renseigner votre e-mail pour contacter</Text>
      </VStack>
      <TextInput placeholder="inout value here" />
      <Button
        title="Go to Congratulation"
        onPress={() => props.navigation.navigate("Congratulation")}
      />
      </VStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 30,
  },
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
    width: 375,
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
