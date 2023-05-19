import React, { useState } from 'react';
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CardBungalow from "../components/CardBungalow";
import {
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
} from 'react-native';

export default function HomeScreen({ navigation }) {

    const bungalowStore = [{ville: 1}, {ville: 2}];
    const bungalowFilter = bungalowStore.map((data, i) => {
        return <CardBungalow props={...data}/>
    });
    console.log('bungalowFilter', bungalowFilter);

    return (
        <View  style={styles.background}>
        <CardBungalow />
        <Text>Home Screen</Text>
        <Button
          title="Go to Product Screen"
          onPress={() => navigation.navigate('Product')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        fontFamily: 'Futura',
        marginBottom: 20
      },
});