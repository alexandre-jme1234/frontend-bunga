
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Box, Input, Center, Button, Stack, Image } from "native-base";


export default function LauchingScreen({ navigation }) {
 return (
    <ImageBackground source={require('../assets/backgroundLogo.jpg')} space={3} resizeMode="cover" style={styles.backgroundImage}>
      <Stack mb="2.5" mt="1.5" direction="row" space={3}>
  <Image style={styles.logoImage} source={require('../assets/logoBunga.jpg')}></Image>
  <Text bold fontSize="sm">BungaBunga</Text>
      </Stack>
  <Stack mb="2.5" mt="1.5" direction="column" space={3}>
    <Text bold fontSize="sm">Bungalows</Text>
  <Text bold fontSize="sm">pour CSE </Text>
  </Stack>
  <View style={styles.background}>
  <View style={styles.border}></View>
    <Stack mb="2.5" mt="1.5" direction="column" space={3}>
    <Text bold fontSize="sm"> - Réserver des bungalows pour vos employés</Text>
    <Text bold fontSize="sm"> - Négocier  en direct avec le loueur.</Text>
    <Text bold fontSize="sm"> - Réserver une saison pour vos salariés.</Text>
    <Text bold fontSize="sm"> - Des Bungalows partout en France.</Text>
    <Button onPress={() => navigation.navigate('Selection')}>Click Me</Button>
    </Stack>
  </View>
    </ImageBackground>
 );
}

const styles = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%'
      },
      logoImage: {
        padding: 50,
      },
      // image: {
      //   width: 664,
      //   height: 664,
      //   left: -217,
      //   top: 135
      // },
      backgroundImage: {
        backgroundColor: '#3V4G45S',
        alignItems: 'center',
        justifyContent: 'center',
          width: '100%',
          height: '100%',
      },
});