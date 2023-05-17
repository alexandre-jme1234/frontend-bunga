import {
    NativeBaseProvider,
    Box,
    Input,
    Stack,
    Text,
  } from "native-base";
import { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";



export default function DataPicker({ navigation }) {
    const [date, setDate] = useState('10-2020');
 
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text bold fontSize="sm">
        Disponibilité
      </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="MM-YYYY"
          minDate="01-2016"
          maxDate="01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              position: 'absolute',
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
    );
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
  });