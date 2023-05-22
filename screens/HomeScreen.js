import React, { useState } from "react";
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CardBungalow from "../components/CardBungalow";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const searchResult = useSelector((state) => state.searchResult.value);
  console.log("searchResult", searchResult);
  const bungalowsList = searchResult.map((data, i) => {

  const formattedData = data.bungalow_dispo[0];

  const bungalowProps = {
    nom: formattedData.nom,
    surface: formattedData.surface,
    chambre: formattedData.chambre,
    terrasse: formattedData.terrasse,
    capaciteAdulte: formattedData.capaciteAdulte,
    capaciteEnfant: formattedData.capaciteEnfant,
    adresse1: formattedData.adresse1,
    adresse2: formattedData.adresse2,
    ville: formattedData.ville,
    codePostal: formattedData.codePostal,
    departementNom: formattedData.departementNom,
    image: formattedData.image,
  };

    return (<CardBungalow key={i} {...bungalowProps} />)
  });

  // // ----------- PROPS OPTIONS DU BUNGALOW

  // climatisation={data.bungalow_dispo[0].climatisation}
  // télévision={data.bungalow_dispo[0].télévision}
  // wifi={data.bungalow_dispo[0].wifi}
  // lave_vaisselle={data.bungalow_dispo[0].lave_vaisselle}
  // machineCafe={data.bungalow_dispo[0].machineCafe}
  // plancha={data.bungalow_dispo[0].plancha}
  // piscine={data.bungalow_dispo[0].piscine}
  // barbecue={data.bungalow_dispo[0].barbecue}
  // chien={data.bungalow_dispo[0].chien}

  // // ----------- PROPS PROPRIO

  // proprio_prenom={data.bungalow_dispo[0].proprietaire.prenom}
  // proprio_nom={data.bungalow_dispo[0].proprietaire.nom}
  // proprio_email={data.bungalow_dispo[0].proprietaire.email}

  return (
    <View style={styles.background}>
      <View style={styles.containerTitle}></View>
      <View style={styles.containerBox}>
        <Text> HOME </Text>
        <CardBungalow />
        <ScrollView style={styles.scrollView}>
          { bungalowsList }
        </ScrollView>
        <Button
          title="Go to Product Screen"
          onPress={() => navigation.navigate("Product")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    paddingTop: StatusBar.currentHeight,
  },
  containerTitle: {
    backgroundColor: "blue",
    width: "100%",
    height: "15%",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  containerBox: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "70%",
    backgroundColor: "yellow",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    fontFamily: "Futura",
    marginBottom: 20,
  },
});
