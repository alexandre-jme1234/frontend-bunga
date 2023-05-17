import {
  NativeBaseProvider,
  Box,
  Input,
  Stack,
  Text,
  Button,
} from "native-base";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View, StyleSheet } from "react-native";
import DataPicker from '../components/DataPicker';

export default function Search({ navigation }) {
  const [counter, setCounter] = useState(0);
  const [weekCounter, setWeekCounter] = useState(0);
  const [destination, setDestination] = useState('');

  const addDestination = () => {
      setDestination(destination);
      console.log(destination);
  }

  const addCounter = () => {
    if (counter >= 0) {
      setCounter(counter + 1);
    }
  };
  const substractCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addWeekCounter = () => {
    if (weekCounter >= 0) {
      setWeekCounter(weekCounter + 1);
    }
  };
  const substractWeekCounter = () => {
    if (weekCounter > 0) {
      setWeekCounter(weekCounter - 1);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
    <Stack space={12} w="75%" maxW="300px" mx="auto" alignItems="center">
      <Text bold fontSize="sm">
        Région
      </Text>
      <Input 
        variant="filled" 
        placeholder="Destination"
        onChangeText={(value) => setDestination(value)}
        value={destination}/>

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
            addCounter();
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
         -</Button>
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
            addWeekCounter();
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
      <DataPicker />
        <Button size="sm" variant="subtle" onPress={() => {
            addDestination()
        }}>
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
});
