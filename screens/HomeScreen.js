import React, { useState } from 'react';
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
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
    return (
        <View  style={styles.background}>
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