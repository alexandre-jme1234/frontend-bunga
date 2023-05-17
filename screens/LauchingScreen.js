
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Box, Input, Center, Button, Stack, Image } from "native-base";


export default function LauchingScreen({ navigation }) {
 return (
    <ImageBackground source={require('../assets/backgroundLogo.jpg')} space={3} resizeMode="cover" style={styles.backgroundImage}>
      <Stack mb="2.5" mt="1.5" direction="row" space={3}>
  <Image style={styles.logoImage} source={require('../assets/logoBunga.jpg')}></Image>
  <Text bold style={styles.title}>BungaBunga</Text>
      </Stack>
  <View style={styles.background}>
  <Stack mb="2.5" mt="1.5" direction="column" space={3} style={styles.containerImage}>
    <Text bold style={styles.subTitle}>Bungalows</Text>
  <Text bold style={{    
    'fontSize': 30,
    'fontWeight': 400,
    'color': '#F8FFFF',
    'fontFamily': 'Futura',
    'marginBottom': 20,
    'margin': 0
    }}>pour CSE</Text>
  <View style={{'backgroundColor': '#F8FFFF', 'borderWidth': 0.5, 'width': 60, 'marginBottom': 40}}/>
  </Stack>
    <Stack mb="2.5" mt="1.5" direction="column" space={3}>
    <Text bold style={styles.bodyCorps}> - Réserver des bungalows pour vos employés</Text>
    <Text bold style={styles.bodyCorps}> - Négocier  en direct avec le loueur.</Text>
    <Text bold style={styles.bodyCorps}> - Réserver une saison pour vos salariés.</Text>
    <Text bold style={styles.bodyCorps}> - Des Bungalows partout en France.</Text>
    </Stack>
    <Button style={{'marginTop': 80, 'marginEnd': 20}} onPress={() => navigation.navigate('Selection')}>Suivant</Button>
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
      },
  title: {
    justifyContent: '',
    fontSize: 70,
    fontWeight: '600',
    color: '#305775',
    fontFamily: 'Futura',
    marginBottom: 20
  },
  subTitle: {
    fontSize: 50,
    fontWeight: '600',
    color: '#F8FFFF',
    fontFamily: 'Futura', 
    margin: 0
  },
  bodyCorps: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F8FFFF',
    fontFamily: 'Futura', 
    margin: 0
  },
  containerImage: {
    paddingLeft: 20,
  },
      logoImage: {
       paddingRight: 50,
       justifyContent: 'flex-start',
       alignItems: 'flex-start',
        // width: '40%',
        // height: '100%',
      },
  background: {
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    marginTop: 20
  }, 
      // image: {
      //   width: 664,
      //   height: 664,
      //   left: -217,
      //   top: 135
      // },
});