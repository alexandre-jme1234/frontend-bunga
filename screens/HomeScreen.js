// import React, { useState } from "react";
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CardBungalow from "../components/CardBungalow";
// import EquipementList from '../components/EquipementList';

import {
  SafeAreaView,
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
import ProductScreen from "./ProductScreen";
import { Stack } from "native-base";
import {
  addCounter,
  addDate,
  addWeekCounter,
  addDestination,
} from "../reducers/reservation";

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
    <SafeAreaView style={styles.background}>
      <Text style={styles.title} > Poppins Regular </Text>
      <View style={styles.containerBox}>
        <Stack style={styles.headContainer}>
        <Text style={styles.title}>Notre Sélection</Text>
        <Text style={styles.title}>{searchResult.destination}</Text>
        </Stack>
        <ScrollView style={styles.scrollView}>
          <CardBungalow />
        </ScrollView>
        <Button
          title="Go to Product Screen"
          onPress={() => navigation.navigate("Product")}
        />
      </View>
    </SafeAreaView>
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
  headContainer: {
    backgroundColor: 'green',
    height: 80,
    padding: 10
  },
  title: {
    // fontFamily: 'abel',
    fontSize: '30',
    // fontWeight: 'regular',
    paddingTop: 20
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
