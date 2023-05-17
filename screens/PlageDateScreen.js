
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PlageDateScreen({ navigation }) {
 return (
   <View style={styles.background}>
     <Text>Home Screen</Text>
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
});