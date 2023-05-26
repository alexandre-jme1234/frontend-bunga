import { useState } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import DatePicker from "@react-native-community/datetimepicker";

export default function DatePickerIOS() {
  const [date, setDate] = useState(new Date());

  console.log(date);

  // don't remove the event param or it will crash
  function onDateChange(event, selectedDate) {
    const currentDate = selectedDate;
    setDate(currentDate);
  }

  return (
    <View style={{ width: "100%", alignItems: 'center'}}>
      <Text style={{marginBottom: 15, fontSize: '17', fontFamily: 'poppins-regular'}}> Date selectionnée </Text>
      <DatePicker
        value={date}
        mode="date"
        onChange={(e, val) => onDateChange(e, val)}
      />
    </View>
  );
}
