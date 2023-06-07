import CardBungalow from "../components/CardBungalow";

import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";


// Affiche components CardBungalow sous forme de ScrollView.
export default function HomeScreen({ navigation }) {

  // Réceptionne l'objet Bungalow du reducer SearchData.
  const searchResult = useSelector((state) => state.searchResult.value);
  // console.log('searchResult_____',searchResult)

  //------------------------------font
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  // console.log("searchResult", searchResult);
  if (!fontsLoaded) {
    return <Text>Please wait...</Text>;
  }

  // console.log("searchResult", searchResult);

  let bungalowsList;

  // Spread opérator pour que toutes les clés de l'objetBungalow descendu du reducer soient considérées comme des propriétés.
  if (searchResult.length) {
    bungalowsList = searchResult.map((objetbungalow, i) => {
      return (
        // on ajoute la méthode navigation
        <CardBungalow key={i} {...objetbungalow} navigation={navigation} />
      );
    });
  }

  return (
    <SafeAreaView>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Notre Sélection</Text>
        <Text style={styles.subTitle}>Ardèche</Text>
      </View>
      <ScrollView vertical={false} style={styles.scrollView}>
        {bungalowsList}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#F8FFFF",
    // backgroundColor: "red",
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  headContainer: {
    justifyContent: "space-around",
    marginTop: 20,
    height: 100,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 40,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
});
