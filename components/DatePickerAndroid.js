// Android specific API
import { useState } from 'react';
import { Text, Button, Platform } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export function DatePickerAndroid() {
	const [date, setDate] = useState(new Date());

	// don't remove the event param or it will crash
	function onDateChange(event, selectedDate) {
		const currentDate = selectedDate;
		setDate(currentDate);
	}

	function showDatePicker() {
		DateTimePickerAndroid.open({
			value: date,
			onChange: onDateChange,
			mode: 'date',
		});
	}

	return (
		<>
			<Text style={{marginBottom: 15, fontSize: '17', fontFamily: 'poppins-regular'}}>
			Date selectionnée: {date.toLocaleString()}</Text>
			<Button
				onPress={() => showDatePicker()}
				title='Sélectionner une date'
			/>
		</>
	);
};
