
import { VStack, Text } from "native-base";
import { Button, StyleSheet, View } from 'react-native';

export default function PlageDateScreen({ navigation }) {
 return (
   <View style={styles.background}>
    <VStack
        space={1}
        alignItems="flex-start"
        paddingLeft="10"
        marginBottom="5"
        marginTop="5"
      >
        <Text bold fontSize="sm">
        Contacter le bailleur
        </Text>
        <Text fontSize="xs">Pour entamer les négociations avec le propriétaire de bungalows.
        Sélectionner les lots de </Text>
      </VStack>
      <VStack style={styles.containerPlageData}>


      </VStack>
     <Button
       title="Go to Congratulation"
       onPress={() => navigation.navigate('Congratulation')}
     />
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
      height: '60%',
      width: '80%',
      backgroundColor: '#F8F8F8',
      borderRadius: '15',
    }
});