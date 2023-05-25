import CardBungalow from "../components/CardBungalow";
import EquipementList from "../components/EquipementList";
import { useState } from "react";
import moment from 'moment';
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
// import DatePicker from "react-native-datepicker";

import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  addDate,
  addWeekCounter,
  addDestination,
} from "../reducers/reservation";
import { saveSearchData } from "../reducers/searchResult";

const IP_BACKEND = "192.168.211.232";


export default function Search({ navigation }) {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.value);

  const [bodyCounter, setBodyCounter] = useState(0);
  const [weeksCounter, setWeeksCounter] = useState(0);
  const [destination, setDestination] = useState("Lyon");
  const [dateSouhait, setDateSouhait] = useState(new Date());
  const [bungalowsData, setBungalowsData] = useState([]);
  const [show, setShow] = useState(false);
  const [dateString, setDateString] = useState('')

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
      dateString,
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

    fetch(`http://${IP_BACKEND}:3000/bungalow/dispo?${listBungalows}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // 'Cache-Control': 'no-cache'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("listBungalows----------", listBungalows);
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
  // console.log("DataB", bungalowsData);
  // console.log("reservation _", reservation);
  const handleInputChange = (text) => {
    setDestination(text);
  };
  // const handleDateChange = (date) => {
  //   setDateSouhait(date);
  // };

  const onChangeDate = (event, selectedDate) => {
    const dateStr = moment(selectedDate).format('YYYY-MM-DD')
    const currentDate = selectedDate 
    setDateSouhait(currentDate);
    setDateString(dateStr)
    setShow(false);
    
  };
  console.log('SelectedDate_______',dateSouhait)

  // const showMode = (currentMode) => {
  //   if (Platform.OS === 'android') {
  //     setShow(false);
  //     // for iOS, add a button that closes the picker
  //   }
  //   setMode(currentMode);
  // };

  const showDatePicker = () => {
    setShow(true);
  };

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
          style={styles.input}
          variant="filled"
          placeholder="Rechercher votre destination"
          onChangeText={handleInputChange}
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
            Capacité du Bungalow
          </Text>
          <Button
            size="sm"
            variant="subtle"
            onPress={substractCounter}
            title="-"
          >
            <Text style={styles.plusText}>-</Text>
          </Button>
          <Text bold fontSize="sm">
            {bodyCounter}
          </Text>
          <Button size="sm" variant="subtle" onPress={addCounterBody} title="+">
            <Text style={styles.plusText}>+</Text>
          </Button>
        </Stack>

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
            <Text style={styles.boldText}>Disponibilité</Text>
            <Button
              onPress={showDatePicker}
              title="Pick a date !"
              style={{ height: 50, width: 50 }}
            />
 
            {show && (
              <DateTimePicker
                value={dateSouhait}
                mode="date"
                onChange={onChangeDate}
              />
            )}
          </View>
        </SafeAreaView>
        <Button size="sm" variant="subtle" onPress={selectionDestination}>
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
  boldText: {
    // fontWeight: "bold",
    fontSize: 14,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  plusText: {
    fontSize: 14,
  },
});
