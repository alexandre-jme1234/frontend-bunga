import { useState, useRef } from "react";
import moment from "moment";
import { Input, Stack, Button } from "native-base";
import { Platform, SafeAreaView, View, Text, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { saveSearchData } from "../reducers/searchResult";
import DatePickerAndroid from "./DatePickerAndroid";
import DatePickerIOS from "./DatePickeriOs";

// const IP_BACKEND_ABDE = "192.168.211.232";
// const IP_BACKEND_ALEX = "10.0.2.155";

export default function Search({ navigation }) {
  const inputRef = useRef(null);

  // ---- Search est intégré à la Screen SelectionScreen

  // Set les critères de recherches de l'utilisateur.
  const [bodyCounter, setBodyCounter] = useState(0);
  const [weeksCounter, setWeeksCounter] = useState(0);
  const [dateString, setDateString] = useState("");


  // Set la date sélectionnée par l'utilisateur sous un format année mois jours du module Moment.
  const handleDateFormat = (date) => {
    const dateStr = moment(date).format("YYYY-MM-DD");
    setDateString(dateStr);
  };

  // console.log("dateString", dateString);

  // Affiche un dataPicker selon le format du téléphone.
  let datePicker = <DatePickerIOS handleDateFormat={handleDateFormat} />;
  if (Platform.OS === "android") datePicker = <DatePickerAndroid />;

  const dispatch = useDispatch();

  // Ajoute 1 au click counter capacité.
  const addCounterBody = () => {
    if (bodyCounter >= 0) {
      setBodyCounter(bodyCounter + 1);
    }
  };

  // soustrait 1 au click au counter capacité
  const substractCounter = () => {
    if (bodyCounter > 0) {
      setBodyCounter(bodyCounter - 1);
    }
  };

  // Ajoute 1 au click counter dateSouhait
  const addWeekCounterBody = () => {
    if (weeksCounter >= 0) {
      setWeeksCounter(weeksCounter + 1);
    }
  };

  // Soustrait 1 au click counter dateSouhait
  const substractWeekCounter = () => {
    if (weeksCounter > 0) {
      setWeeksCounter(weeksCounter - 1);
    }
  };

  // ---- Preparation des params : objet de paramètres d'URL contenant différents paramètres.
  function selectionDestination() {
    const params = new URLSearchParams({
      // Récupère onChangetext de l'input si il existe
      destination: inputRef.current?.inputValue,
      // Récupère valeurs useState
      dateString,
      bodyCounter,
    });

  // ---- 
    const listBungalows = params.toString();

    // --- reçoit objet bungalows & et le dispatch vers reducer searchResults
    fetch(`https://backend-bunga.vercel.app/bungalow/dispo?${listBungalows}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(saveSearchData(data.results));
          navigation.navigate("TabNavigator", { screen: "Home" });
        }
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      });
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView>
      <Stack space={12} w="75%" maxW="300px" mx="auto" alignItems="center">
        <View style={{height: 70, width: 400, flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
        <Text style={styles.title}>Choisissez votre bungalow</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.body}>Région</Text>
          <Input
            ref={inputRef}
            variant="underlined"
            placeholder="Rechercher votre destination"
            onChangeText={(value) => (inputRef.current.inputValue = value)}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.body}>Nombre de participants</Text>
          <Stack
            direction="row"
            space={4}
            w="100%"
            maxW="300px"
            mx="auto"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="grey.100"
          >
            <Text>
              Capacité du Bungalow
            </Text>
            <View style={styles.buttonCounter}>
              <Button
                size="sm"
                variant="subtle"
                onPress={substractCounter}
                title="-"
              >
                <Text style={styles.plusText}>-</Text>
              </Button>
              <Text style={styles.counterBody}>{bodyCounter}</Text>
              <Button
                size="sm"
                variant="subtle"
                onPress={addCounterBody}
                title="+"
              >
                <Text style={styles.plusText}>+</Text>
              </Button>
            </View>
          </Stack>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.body}>Semaines</Text>
          <Stack
            direction="row"
            space={4}
            w="100%"
            maxW="300px"
            mx="auto"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>
              Nombre de semaines
            </Text>
            <View style={styles.buttonCounter}>
              <Button
                size="sm"
                variant="subtle"
                onPress={() => {
                  substractWeekCounter();
                }}
              >
                -
              </Button>
              <Text style={styles.counterBody}>{weeksCounter}</Text>
              <Button
                size="sm"
                variant="subtle"
                onPress={() => {
                  addWeekCounterBody();
                }}
              >
                +
              </Button>
            </View>
          </Stack>
        </View>
      </Stack>
        <View style={{ height: "30%", justifyContent: "space-between" }}>
          <View style={styles.containerDataPicker}>{datePicker}</View>

          <Button
            style={{marginLeft: 50, marginRight: 50}}
            size="sm"
            variant="subtle"
            onPress={() => {
              selectionDestination();
            }}
          >
            Rechercher
          </Button>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FFFF",
    flex: 1,
    justifyContent: "space-around",
  },
  counterBody: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  textContainer: {
    height: 70,
    width: 300,
    justifyContent: "space-around",
  },
  body: {
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  buttonCounter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  containerDataPicker: {
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
  },
  boldText: {
    fontSize: 14,
  },
  plusText: {
    fontSize: 14,
  },
});
