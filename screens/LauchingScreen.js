
import { Button, StyleSheet, Text, View } from 'react-native';
import { Box, Input, Center } from "native-base";
import Search from '../components/Search';


export default function LauchingScreen({ navigation }) {
 return (
  <View style={styles.background}>
    <Text>test lauching</Text>
    <Button
          title="Go to bottom Tab "
          onPress={() => navigation.navigate('TabNavigator')}
        />
  </View>
 );
}

const styles = StyleSheet.create({
    background: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
});