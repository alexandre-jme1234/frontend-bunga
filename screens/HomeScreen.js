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
// console.log('searchResult_____',searchResult)
  //------------------------------font
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Please wait...</Text>;
  }

  // console.log("searchResult", searchResult);

  // Map------------------------------------------------- cards
  // const bungalowProps = {
  //   nom: props.nom,
  //   surface: props.surface,
  //   chambre: props.chambre,
  //   terrasse: props.terrasse,
  //   capaciteAdulte: props.capaciteAdulte,
  //   capaciteEnfant: props.capaciteEnfant,
  //   adresse1: props.adresse1,
  //   adresse2: props.adresse2,
  //   ville: props.ville,
  //   codePostal: props.codePostal,
  //   departementNom: props.departementNom,
  //   image: props.image,
  //   // // ----------- PROPS OPTIONS DU BUNGALOW

  //   climatisation: props.climatisation,
  //   télévision: props.télévision,
  //   wifi: props.wifi,
  //   lave_vaisselle: props.lave_vaisselle,
  //   machineCafe: props.machineCafe,
  //   plancha: props.plancha,
  //   piscine: props.piscine,
  //   barbecue: props.barbecue,
  //   chien: props.chien,
  //   // // ----------- PROPS PROPRIO

  //   proprio_prenom: props.proprietaire.prenom,
  //   proprio_nom: props.proprietaire.nom,
  //   proprio_email: props.proprietaire.email,
  // };

  let bungalowsList;
  if (searchResult.length) {
    bungalowsList = searchResult.map((objetbungalow, i) => {
      // attention à descendre la prop de navigation au composant
      return <CardBungalow key={i} {...objetbungalow} navigation={navigation} />;
    });
  }

  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.headContainer}>
        <Text style={styles.title}>Notre Sélection</Text>
        <Text style={styles.subTitle}>Ardèche</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          {bungalowsList}
        </ScrollView>
        <Button
          title="Go to Product Screen"
          onPress={() => navigation.navigate("Product")}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: "red",
    width: '100%',
    height: '100%',
  },
  headContainer: {
    // backgroundColor: "green",
    justifyContent: 'space-around',
    marginTop: 20,
    height: 100,
    padding: 10,
  },
  title: {
    fontSize: 30,
    // fontWeight: 600,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 40,
    // fontWeight: 600,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  }
});
