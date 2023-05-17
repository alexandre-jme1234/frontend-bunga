import {
  NativeBaseProvider,
  Box,
  Input,
  Stack,
  Text,
  Button,
} from "native-base";
import { useState } from "react";
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

export default function Search({ navigation }) {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.value);

  const [counter, setCounter] = useState(0);
  const [weekCounter, setWeekCounter] = useState(0);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("09-10-2020");

  const addCounterBody = () => {
    if (counter >= 0) {
      setCounter(counter + 1);
    }
  };

  const substractCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addWeekCounterBody = () => {
    if (weekCounter >= 0) {
      setWeekCounter(weekCounter + 1);
    }
  };
  const substractWeekCounter = () => {
    if (weekCounter > 0) {
      setWeekCounter(weekCounter - 1);
    }
  };

  const selectionDestination = () => {
    dispatch(addCounter(counter));
    dispatch(addDate(date));
    dispatch(addWeekCounter(weekCounter));
    dispatch(addDestination(destination));
  };

  console.log(reservation);

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
            {counter}
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
            {weekCounter}
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
              date={date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2015"
              maxDate="31-01-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
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
                setDate(date);
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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
