
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Box, Input, Center, Button, Stack, Image } from "native-base";
import Search from '../components/Search';


export default function LauchingScreen({ navigation }) {
 return (
    <ImageBackground source={require('../assets/backgroundLogo.jpg')} space={3} resizeMode="cover" style={styles.backgroundImage}>
      <Stack mb="2.5" mt="1.5" direction="row" space={3}>
  <Image style={styles.logoImage} source={require('../assets/logoBunga.jpg')}></Image>
  <Text bold style={styles.title}>BungaBunga</Text>
      </Stack>
  <Stack mb="2.5" mt="1.5" direction="column" space={3}>
    <Text bold style={styles.subTitle}>Bungalows</Text>
  <Text bold style={styles.subTitle}>pour CSE</Text>
  </Stack>
  <View style={styles.background}>
  <View style={styles.border}></View>
    <Stack mb="2.5" mt="1.5" direction="column" space={3}>
    <Text bold fontSize="sm"> - Réserver des bungalows pour vos employés</Text>
    <Text bold fontSize="sm"> - Négocier  en direct avec le loueur.</Text>
    <Text bold fontSize="sm"> - Réserver une saison pour vos salariés.</Text>
    <Text bold fontSize="sm"> - Des Bungalows partout en France.</Text>
    </Stack>
    <Button onPress={() => console.log("hello world")}>Click Me</Button>
  </View>
    </ImageBackground>
 );
}

const styles = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
  title: {
    justifyContent: '',
    fontSize: 60,
    fontWeight: '600',
    fontFamily: 'Futura',
    marginBottom: 20
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Futura',
    marginBottom: 20
  },
      logoImage: {
       paddingRight: 50,
        // width: '40%',
        // height: '100%',
      },
      // image: {
      //   width: 664,
      //   height: 664,
      //   left: -217,
      //   top: 135
      // },
});