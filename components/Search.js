import CardBungalow from "../components/CardBungalow";
import { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Input,
  Stack,
  Text,
  Button,
} from "native-base";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  addDate,
  addWeekCounter,
  addDestination,
} from "../reducers/reservation";

import { useNavigation } from "@react-navigation/native";

import { saveSearchData } from "../reducers/searchResult";

const IP_BACKEND = "10.0.2.155"

export default function Search({ navigation }) {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.value);
  const [bodyCounter, setBodyCounter] = useState(0);
  const [weeksCounter, setWeeksCounter] = useState(0);
  const [destination, setDestination] = useState("Ardèche");
  const [dateSouhait, setDateSouhait] = useState("2023-07-19");
  const [bungalowsData, setBungalowsData] = useState([]);


  const addCounterBody = () => {
    if (bodyCounter >= 0) {
      setBodyCounter(bodyCounter + 1);
    }
  };

  const substractCounter = () => {
    if (bodyCounter > 0) {
      setBodyCounter(bodyCounter - 1);
    }
  };

  const addWeekCounterBody = () => {
    if (weeksCounter >= 0) {
      setWeeksCounter(weeksCounter + 1);
    }
  };
  const substractWeekCounter = () => {
    if (weeksCounter > 0) {
      setWeeksCounter(weeksCounter - 1);
    }
  };

  // --------------------------Preparation des params
  function selectionDestination() {
    const params = new URLSearchParams({
      destination,
      dateSouhait,
      bodyCounter,
    });

    const listBungalows = params.toString();

    // console.log("query params", listBungalows);
    // ------------------------------req.headers.destination ?
    // const headers = {
    //   "Content-Type": "application/json",
    //   destination: destination,
    //   bodyCounter: bodyCounter.toString(),
    //   dateSouhait: dateSouhait
    // };
    // ---------------------------Fetch recherche bungalow dispo

    fetch(`http://${IP_BACKEND}:3000/dispo/?${listBungalows}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {

        console.log("DATA", data.results);
        //if (data.dispo === object) => setDispo([...dispo, data.dispo])
        dispatch(saveSearchData(data.results));
        navigation.navigate('TabNavigator', { screen: 'Home' })
        // data.success && setBungalowsData(data.results);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
      });
    //         if (data.result && setBungalowsData(data)) {
    //           // console.log(selectionDestination);
    //           dispatch(addCounter(bodyCounter));
    //           // dispatch(addDate(dateSouhait));
    //           dispatch(addWeekCounter(weeksCounter));
    //           dispatch(addDestination(destination));

    // // Renvoie les props vers un composant enfant.

    //           //
    //         }
  }
  // console.log("DataB", bungalowsData);
  // console.log("reservation _", reservation);

  const bungalows = bungalowsData.map((data, i) => {
    
    // console.log('bungalow in map', data)
    return 
    // console.log('CardBungalow _', CardBungalow())
   
  });
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Stack space={12} w="75%" maxW="300px" mx="auto" alignItems="center">
        <Text bold fontSize="sm">
          Région
        </Text>
        <Input
          variant="filled"
          placeholder="Destination"
          onChangeText={(value) => setDestination(value)}
          value={destination}
        />
        <Text bold fontSize="sm">
          Nombre de participants
        </Text>
        <Stack
          direction="row"
          space={4}
          w="75%"
          maxW="300px"
          mx="auto"
          alignItems="center"
          justifyContent="center"
        >
          <Text bold fontSize="sm">
            Capacité d'un Bungalow
          </Text>
          <Button
            size="sm"
            variant="subtle"
            onPress={() => {
              addCounterBody();
            }}
          >
            +
          </Button>
          <Text bold fontSize="sm">
            {bodyCounter}
          </Text>
          <Button
            size="sm"
            variant="subtle"
            onPress={() => {
              substractCounter();
            }}
          >
            -
          </Button>
        </Stack>

        <Text bold fontSize="sm">
          Semaines
        </Text>
        <Stack
          direction="row"
          space={4}
          w="75%"
          maxW="300px"
          mx="auto"
          alignItems="center"
          justifyContent="center"
        >
          <Text bold fontSize="sm">
            Nombre semaines
          </Text>
          <Button
            size="sm"
            variant="subtle"
            onPress={() => {
              addWeekCounterBody();
            }}
          >
            +
          </Button>
          <Text bold fontSize="sm">
            {weeksCounter}
          </Text>
          <Button
            size="sm"
            variant="subtle"
            onPress={() => {
              substractWeekCounter();
            }}
          >
            -
          </Button>
        </Stack>
        <SafeAreaView style={styles.containerDataPicker}>
          <View style={styles.containerDataPicker}>
            <Text bold fontSize="sm">
              Disponibilité
            </Text>

            {/* Data revient sous format de chaîne de caractères */}

            <DatePicker
              style={styles.datePickerStyle}
              date={dateSouhait} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2015"
              maxDate="31-01-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              // getDateStr={Date}
              customStyles={{
                dateIcon: {
                  display: "none",
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => {
                setDateSouhait(date);
              }}
            />
          </View>
        </SafeAreaView>
        <Button
          size="sm"
          variant="subtle"
          onPress={() => {
            selectionDestination();
          }}
        >
          Rechercher
        </Button>
      </Stack>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  containerDataPicker: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
