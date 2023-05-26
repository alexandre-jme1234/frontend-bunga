
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import {
  VStack,
} from 'native-base';

export default function CongratulateScreen({ navigation }) {
 return (
   <View style={styles.background}>
    <VStack style={styles.containerPlageData}>
        <VStack>
          <Text style={styles.title}>
          Félicitations!</Text>
          <Text style={styles.body}>
            Votre mail a bien été envoyé.
          </Text>
        </VStack>
      </VStack>
    
   </View>
 );
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    containerPlageData: {
      padding: 30,
      height: '60%',
      width: '80%',
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15',
    },
      // plageData: {
      //   height: '10%',
      //   width: '100%',
      //   backgroundColor: '#EAEAEA',
      //   borderRadius: '10',
      // },
    title: {
      fontFamily: 'Poppins-Regular',
      fontSize: 20,
      // fontWeight: 'bold',
      marginTop: 250,
      textAlign: 'center', 
    },  
    body: {
      fontSize: 17,
      // fontWeight: 600,
      fontFamily: "Poppins-Regular",
      marginBottom: 20,
    }
});