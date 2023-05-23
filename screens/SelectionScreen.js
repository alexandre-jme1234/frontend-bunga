
import { Button, StyleSheet, Text, View } from 'react-native';
import { Box, Input } from "native-base";
import Search from '../components/Search';


export default function SelectionScreen({ navigation }) {

 return (
  <View style={styles.background}>
     <Text>Selection Screen</Text>
     <Search navigation={navigation} />
     <Button
       title="Go to Home"
       onPress={() => navigation.navigate('TabNavigator')}
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
      padding: 30,
      height: '60%',
      width: '80%',
      backgroundColor: '#F8F8F8',
      borderRadius: '15',
    },
});
