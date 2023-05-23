import React, { useState } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

export default function WishListScreen({ navigation }) {
    return (
        <View  style={styles.background}>
        <Text>Wishlist Screen</Text>
        <Button
          title="Go to Tab"
          onPress={() => navigation.navigate('TabNavigator')}
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
        // fontFamily: 'Futura',
        marginBottom: 20
      },
});