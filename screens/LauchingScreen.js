import { StyleSheet, View, ImageBackground, Text, SafeAreaView } from "react-native";
import {
  Box,
  Input,
  Center,
  Button,
  Stack,
  HStack,
  Image,
} from "native-base";
import SignIn from '../components/SignIn';
import { useFonts } from "expo-font";

export default function LauchingScreen({ navigation }) {
  //----------------font
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Please wait...</Text>;
  }

  //-----------------------

  return (
    <ImageBackground
      source={require("../assets/backgroundLogo.jpg")}
      accessibilityLabel="BackgroundImage"
      resizeMode="cover"
      alt="ImagedeFond"
      style={styles.backgroundImage}
    >
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          height: "90%",
          width: "100%",
        }}
      >
        <HStack>
          <Image
            style={styles.logoImage}
            source={require("../assets/logoBunga.jpg")}
            alt="ImagedeFond2"
            accessibilityLabel="LogoBungaBunga"
            marginRight="5"
          ></Image>
          <Text bold style={styles.title}>
            BungaBun
          </Text>
        </HStack>
        <Stack
          height="100%"
          width="100%"
          space={2}
          justifyContent="center"
          alignItems="center"
        >
          <View style={styles.containerText}>
            <Text bold style={styles.subTitle}>
              Bungalows
            </Text>
            <Text
              bold
              style={{
                fontSize: 30,
                // fontWeight: 400,
                color: "#F8FFFF",
                fontFamily: "Poppins-Regular",
                marginBottom: 40,
                margin: 0,
                // 'backgroundColor': 'red',
              }}
            >
              pour CSE
            </Text>
          </View>
          {/* <View>
              <SignIn />
          </View> */}
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Text bold style={styles.bodyCorps}>
              {" "}
              - Réserver des bungalows pour vos employés
            </Text>
            <Text bold style={styles.bodyCorps}>
              {" "}
              - Négocier en direct avec le loueur.
            </Text>
            <Text bold style={styles.bodyCorps}>
              {" "}
              - Réserver une saison pour vos salariés.
            </Text>
            <Text bold style={styles.bodyCorps}>
              {" "}
              - Bungalows partout en France.
            </Text>
            <Button
              style={styles.buttonSuivant}
              onPress={() => navigation.navigate("Selection")}
            >
              Suivant
            </Button>
          </Stack>
        </Stack>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  containerText: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 300,
    height: 150
  },
  title: {
    // justifyContent: '',
    fontSize: 60,
    // fontWeight: 600,
    color: "#305775",
    fontFamily: "Poppins-Regular",
    // marginBottom: 20
  },
  subTitle: {
    height: 100,
    fontSize: 54,
    // fontWeight: 600,
    color: "#F8FFFF",
    fontFamily: "Poppins-Regular",
    margin: 0,
  },
  bodyCorps: {
    fontSize: 14,
    // fontWeight: 600,
    color: "#F8FFFF",
    fontFamily: "Poppins-Regular",
    margin: 0,
  },
  containerImage: {
    paddingLeft: 20,
  },
  logoImage: {
    //  paddingRight: 50,
    //  justifyContent: 'flex-start',
    //  alignItems: 'flex-start',
    // width: '40%',
    // height: '100%',
  },
  background: {
    marginLeft: 30,
    marginRight: 60,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonSuivant: {
    marginTop: 80,
  },
});
