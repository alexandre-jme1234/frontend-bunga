import {
  HStack,
  VStack,
  Badge,
  Text,
  ScrollView,
  Image,
  Button,
} from "native-base";
import { StyleSheet, Box } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EquipementList from "../components/EquipementList";
import { useSelector } from "react-redux";

export default function ProductScreen(props) {
  const { bungalow_id } = props.route.params;

  const selectPlageData = () => {
    props.navigation.navigate("PlageDate", { bungalow_id });
  };

  const searchResult = useSelector((state) => state.searchResult.value);
  const bungalowsFilter = searchResult.filter((e) => e._id === bungalow_id);
  const capacite =
    bungalowsFilter[0].capaciteAdulte + bungalowsFilter[0].capaciteEnfant;

  return (
    <ScrollView vertical={false} style={styles.background}>
      <Image
        style={styles.imageProduct}
        src={bungalowsFilter[0].image}
        alt="bungalow background"
      />
      <VStack
        space={1}
        alignItems="flex-start"
        paddingLeft={10}
        marginBottom={5}
        marginTop={10}
      >
        <Text
          style={{
            fontSize: 20,
            // fontWeight: 600,
            fontFamily: "Poppins-Regular",
            marginBottom: 20,
          }}
        >
          {bungalowsFilter[0].departementNom}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Poppins-Regular",
            marginBottom: 20,
          }}
        >
          {bungalowsFilter[0].ville}
        </Text>
      </VStack>
      <HStack backgroundColor="red.100" space={2} width="100%" padding={0}>
        <HStack
          justifyContent="center"
          alignItems="center"
          space={4}
          backgroundColor="#EBE8FF"
          width="100%"
          marginRight={20}
          padding={1}
          borderRadius={5}
        >
          <HStack
            justifyContent="space-around"
            alignItems="center"
            space={2}
            backgroundColor="#F5F5F5"
          >
            <FontAwesome
              name="arrows-alt"
              aria-hidden="true"
              size={15}
              color="#484657"
            ></FontAwesome>
            <Text>surface:</Text>
            <Badge justifyContent="center">{bungalowsFilter[0].surface}</Badge>
          </HStack>
          <HStack
            justifyContent="space-around"
            alignItems="center"
            space={2}
            backgroundColor="#F5F5F5"
          >
            <FontAwesome
              name="users"
              aria-hidden="true"
              size={15}
              color="#484657"
            ></FontAwesome>
            <Text>capacité</Text>
            <Badge justifyContent="center">{capacite}</Badge>
          </HStack>
          <HStack
            justifyContent="space-around"
            alignItems="center"
            w="110"
            space={2}
            backgroundColor="#F5F5F5"
          >
            <FontAwesome
              name="bed"
              aria-hidden="true"
              size={15}
              color="#484657"
            ></FontAwesome>
            <Text>chambres</Text>
            <Badge justifyContent="center">{bungalowsFilter[0].chambre}</Badge>
          </HStack>
        </HStack>
      </HStack>

      <VStack
        space={1}
        alignItems="flex-start"
        paddingLeft={10}
        paddingRight={10}
        marginBottom={5}
        marginTop={5}
      >
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Poppins-Regular",
            marginBottom: 20,
          }}
        >
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
        padding={5}
        margin={5}
      >
        <FontAwesome
          name="caret-right"
          aria-hidden="true"
          size={10}
          color="#484657"
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
        marginLeft={5}
        marginRight={5}
        onPress={() => {
          selectPlageData();
        }}
        title="GO GO GO"
      >
        Voir les disponibilités du lieu
      </Button>
      <EquipementList {...bungalowsFilter} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F8FFFF",
  },
  imageProduct: {
    width: "100%",
    height: "30%",
  },
});
