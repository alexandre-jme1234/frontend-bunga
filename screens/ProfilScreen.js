
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

export default function ProfilScreen({ navigation }) {
    return (
        <View  style={styles.background}>
        <Text>Profil Screen</Text>
        <Button
          title="Go to Tab"
          onPress={() => navigation.navigate('TabNavigator')}
        />
      </View>
    );
}

const style = StyleSheet.create({
    background: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
});