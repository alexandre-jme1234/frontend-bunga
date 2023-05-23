import React, { useState } from "react";
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
  console.log("searchResult", searchResult[0].departementNom);

  const bungalowsList = searchResult.map((data, i) => {
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

      // ----------- PROPS OPTIONS DU BUNGALOW
      climatisation: formattedData.climatisation,
      télévision: formattedData.télévision,
      wifi: formattedData.wifi,
      lave_vaisselle: formattedData.lave_vaisselle,
      machineCafe: formattedData.machineCafe,
      plancha: formattedData.plancha,
      piscine: formattedData.piscine,
      barbecue: formattedData.barbecue,
      chien: formattedData.chien,

      // ----------- PROPS PROPRIO
  // proprio_prenom: formattedData.proprietaire.prenom,
  // proprio_nom: formattedData.proprietaire.nom,
  // proprio_email: formattedData.proprietaire.email
  };

    return (
    <CardBungalow key={i} {...bungalowProps} />,
    <ProductScreen key={i} {...bungalowProps} />
    )
  });

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.containerBox}>
        <View style={styles.headContainer}>
        <Text style={styles.title}>Notre Sélection</Text>
        <Text style={styles.subTitle}>{searchResult[0].departementNom}</Text>
        </View>
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
    // backgroundColor: "red",
    paddingTop: StatusBar.currentHeight,
  },
  headContainer: {
    // backgroundColor: 'green',
    justifyContent: 'space-around',
    // alignItems: 'center',
    height: 90,
    paddingTop: 26
  },
  subTitle: {
     // fontFamily: 'abel',
     fontSize: '60',
     fontWeight: 'bold',
     padding: 0,
    //  color: 'red',
    //  paddingTop: 20
  },
  title: {
    // fontFamily: 'abel',
    fontSize: '1',
    fontWeight: 'regular',
    padding: 0,
  },
  scrollView: {
    backgroundColor: "red",
    width: '100%',
    height: '100%',
    marginTop: 40
  },
  containerBox: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "70%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Futura",
    marginBottom: 20,
  },
});
