import CardBungalow from "../components/CardBungalow";
import EquipementList from "../components/EquipementList";
import { useState } from "react";
import moment from "moment";
import {
  NativeBaseProvider,
  Box,
  Input,
  Stack,
  Button,
} from "native-base";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  addDate,
  addWeekCounter,
  addDestination,
} from "../reducers/reservation";
import { saveSearchData } from "../reducers/searchResult";
import DatePickerAndroid from './DatePickerAndroid';
import DatePickerIOS from './DatePickeriOs';

const IP_BACKEND_ABDE = "192.168.211.232";
const IP_BACKEND_ALEX = "10.0.2.155";
const [dateSouhait, setDateSouhait] = useState(new Date());

export default function Search({ navigation }) {

  let datePicker = <DatePickerIOS/>
      if(Platform.OS === 'android') datePicker = <DatePickerAndroid/>

  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.value);

  const [bodyCounter, setBodyCounter] = useState(0);
  const [weeksCounter, setWeeksCounter] = useState(0);
  const [destination, setDestination] = useState("Lyon");
  // const [bungalowsData, setBungalowsData] = useState([]);
  const [show, setShow] = useState(false);
  const [dateString, setDateString] = useState("");

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

    fetch(`http://${IP_BACKEND_ALEX}:3000/bungalow/dispo?${listBungalows}`, {
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
    const dateStr = moment(selectedDate).format("YYYY-MM-DD");
    const currentDate = selectedDate;
    setDateSouhait(currentDate);
    setDateString(dateStr);
    setShow(false);
  };


  console.log("SelectedDate_______", dateSouhait);

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
      <Stack space={12} w="75%" maxW="300px" mx="auto" alignItems="center">
      <Text style={styles.title}>
        Choisissez votre bungalow
        </Text>
        <View style={styles.textContainer}>
        <Text style={styles.body}>
          Région
        </Text>
        <Input
          // style={styles.input}
          variant="underlined"
          placeholder="Rechercher votre destination"
          onChangeText={handleInputChange}
          value={destination}
        />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.body}>
          Nombre de participants
        </Text>
        <Stack
          direction="row"
          space={4}
          w="100%"
          maxW="300px"
          mx="auto"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor='#FAFAFA'
        >
          <Text bold fontSize="sm">
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
          <View style={styles.counterBlock}>
          <Text bold fontSize="sm">
            {bodyCounter}
          </Text>
          </View>
          <Button size="sm" variant="subtle" onPress={addCounterBody} title="+">
            <Text style={styles.plusText}>+</Text>
          </Button>
          </View>
        </Stack>
        </View>
        
        <View style={styles.textContainer}>
        <Text style={styles.body}>
        Semaines
        </Text>
        <Stack
          direction="row"
          space={4}
          w="100%"
          maxW="300px"
          mx="auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text bold fontSize="sm">
            Nombre semaines
          </Text>
          <View style={styles.buttonCounter}>
          <Button
            size="sm"
            variant="subtle"
            onPress={() => {
              addWeekCounterBody();
            }}
          >
            +
          </Button>
          <View style={styles.counterBlock}>
          <Text bold fontSize="sm">
            {weeksCounter}
          </Text>
          </View>
          <Button
            size="sm"
            variant="subtle"
            onPress={() => {
              substractWeekCounter();
            }}
          >
            -
          </Button>
        </View>
        </Stack>
        </View>
        <SafeAreaView style={styles.containerDataPicker}>
          <View style={styles.containerDataPicker}>
            <Text style={styles.boldText}>Disponibilité</Text>
            { datePicker }
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F8FFFF',
    flex: 1,
    // padding: 10,
    // margin: 50,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    // fontWeight: 600,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  counterBlock: {
    marginLeft:10,
    marginRight: 10
  },
  textContainer: {
    height: 70,
    width: 300,
    // backgroundColor: 'red',
    justifyContent: 'space-around',
  },
  body: {
    fontSize: 17,
    // fontWeight: 600,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  buttonCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
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
