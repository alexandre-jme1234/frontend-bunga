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


// --- Component : appelle les props et la navigation
export default function PlageDateScreen({navigation, ...props}) {
  return (
    <SafeAreaView style={styles.container}>
      <VStack
        space={1}
        alignItems="flex-start"
        justifyContent="space-around"
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
        <View style={{marginTop: 100, marginLeft: 90, height: 60, width: 200, backgroundColor: '#0A91B1', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
        <Button
        title="Contacter par mail"
        color="#FAFAFA"
        onPress={() => navigation.navigate("Congratulation")}
      />
      </View>
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
    width: 380,
    backgroundColor: "#F8F8F8",
    borderRadius: "15",
  },
  plageData: {
    height: "10%",
    width: "100%",
    borderRadius: "10",
  },
});
