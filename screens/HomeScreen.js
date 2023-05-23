// import React, { useState } from "react";
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CardBungalow from "../components/CardBungalow";
// import EquipementList from '../components/EquipementList';

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
import { useFonts } from "expo-font";

export default function HomeScreen({ navigation }) {
 
  const searchResult = useSelector((state) => state.searchResult.value);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  
  if (!fontsLoaded) {
    return <Text>Please wait...</Text>;
  }

  console.log("searchResult", searchResult);

  // Map------------------------------------------------- cards
  let bungalowsList
    if(searchResult.length) {
      bungalowsList = searchResult.map((data, i) => {
        const formattedData = data;
    
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
          // // ----------- PROPS OPTIONS DU BUNGALOW
    
          climatisation: formattedData.climatisation,
          télévision: formattedData.télévision,
          wifi: formattedData.wifi,
          lave_vaisselle: formattedData.lave_vaisselle,
          machineCafe: formattedData.machineCafe,
          plancha: formattedData.plancha,
          piscine: formattedData.piscine,
          barbecue: formattedData.barbecue,
          chien: formattedData.chien,
          // // ----------- PROPS PROPRIO
    
          proprio_prenom: formattedData.proprietaire.prenom,
          proprio_nom: formattedData.proprietaire.nom,
          proprio_email: formattedData.proprietaire.email,
        };
        console.log("bungalowProps__", bungalowProps);
        return (
          <CardBungalow key={i} {...bungalowProps} />
          //   // <EquipementList key={i} {...bungalowProps} />
        );
      });
    }
  
  

  return (
    <View style={styles.background}>
      <Text style={styles.title} > Poppins Regular </Text>
      <View style={styles.containerTitle}></View>
      <View style={styles.containerBox}>
        <Text> HOME </Text>
        <CardBungalow />
        <ScrollView style={styles.scrollView}>{bungalowsList}</ScrollView>
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
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  containerBox: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "70%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
});
