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

export default function ProductScreen(props) {

  const { bungalow_id } = props.route.params
  console.log('bungalow_id', bungalow_id)

  const selectPlageData = () => {
    props.navigation("PlageDate");
  };
  console.log('All props', props)
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
              size={20}
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
              size={20}
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
              size={20}
              color="#ec6e5b"
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
          size={10}
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
      <EquipementList {...props} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageProduct: {
    width: "100%",
    height: "30%",
  },
});
