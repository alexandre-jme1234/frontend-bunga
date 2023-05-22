import {
  HStack,
  VStack,
  Badge,
  Text,
  ScrollView,
  Image,
  Flatlist,
  Button,
} from "native-base";
import { StyleSheet, Box } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EquipementList from '../components/EquipementList';

export default function ProductScreen({ navigation }) {
  const selectPlageData = () => {
    navigation.navigate("PlageDate");
  };

  // TESTS FLATLIST


  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
  ];

  return (
    <ScrollView style={styles.background}>
      <Image
          style={styles.imageProduct}
          source={require("../assets/bungalowBackground.jpeg")}
          alt="bungalow background"
          // resizeMode="cover"
        />
      <VStack
        space={1}
        alignItems="flex-start"
        paddingLeft="10"
        marginBottom="5"
        marginTop="5"
      >
        <Text bold fontSize="sm">
          Ardèche
        </Text>
        <Text fontSize="xs">Avis</Text>
      </VStack>

      <HStack
        alignSelf="center"
        space={2}
        width="300"
        justifyContent="space-between"
        padding="0"
      >
        <HStack
          paddingLeft="5"
          alignItems="center"
          space={8}
          backgroundColor="#EBE8FF"
          width="325"
          padding="1"
          borderRadius="5"
        >
          <HStack
            justifyContent="center"
            alignItems="center"
            space={0}
            backgroundColor="#F5F5F5"
          >
            <FontAwesome
              name="caret-right"
              aria-hidden="true"
              size="20"
              color="#ec6e5b"
            ></FontAwesome>
            <Badge justifyContent="center">surface</Badge>
          </HStack>
          <HStack
            justifyContent="center"
            alignItems="center"
            space={0}
            backgroundColor="#F5F5F5"
          >
            <FontAwesome
              name="caret-right"
              aria-hidden="true"
              size="20"
              color="#ec6e5b"
            ></FontAwesome>
            <Badge justifyContent="center">surface</Badge>
          </HStack>
          <HStack
            justifyContent="center"
            alignItems="center"
            space={0}
            backgroundColor="#F5F5F5"
          >
            <FontAwesome
              name="caret-right"
              aria-hidden="true"
              size="20"
              crolor="#ec6e5b"
            ></FontAwesome>
            <Badge justifyContent="center">surface</Badge>
          </HStack>
        </HStack>
      </HStack>

      <VStack
        space={1}
        alignItems="flex-start"
        paddingLeft="10"
        paddingRight="10"
        marginBottom="5"
        marginTop="5"
      >
        <Text bold fontSize="sm">
          Description
        </Text>
        <Text fontSize="xs">
          Petit bungalow cosi en bord d’Ardèche, profitez d’un cadre détente
          pour vous ressourcer vous et votre famille. Petit bungalow cosi en
          bord d’Ardèche, profitez d’un cadre détente pour vous ressourcer vous
          et votre famille.
        </Text>
      </VStack>

      <HStack
        alignItems="center"
        space={4}
        justifyContent="flex-start"
        backgroundColor="#FFFFFF"
        padding="5"
        marginBottom="5"
        marginTop="5"
        marginLeft="5"
        marginRight="5"
      >
        <FontAwesome
          name="caret-right"
          aria-hidden="true"
          size="10"
          color="#ec6e5b"
        ></FontAwesome>
        <VStack space={2} alignItems="flex-start">
          <Text bold fontSize="sm">
            Proprio
          </Text>
          <HStack
            alignItems="flex-start"
            space={2}
            justifyContent="space-between"
          >
            <Text bold fontSize="xs">
              730 évaluations
            </Text>
            <Text bold fontSize="xs">
              Avis
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <Button
        size="sm"
        variant="subtle"
        marginLeft="5"
        marginRight="5"
        onPress={() => {
          selectPlageData();
        }}
        title="GO GO GO"
      >
        Voir les disponibilités du lieu
      </Button>
      <EquipementList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageProduct: {
    width: "100%",
    height: "30%",
  },
});
