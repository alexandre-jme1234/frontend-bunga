
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CongratulateScreen({ navigation }) {
 return (
   <View style={styles.background}>
     <Text>Congratulations</Text>
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