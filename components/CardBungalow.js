import {
  Center,
  Text,
  AspectRatio,
  Box,
  HStack,
  Stack,
  Heading,
  Badge,
  Button,
} from "native-base";
// import { saveSearchData } from "../reducers/searchResult";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CardBungalow(props) {
  
  console.log("props_cards__", props.disponibilites[0].tarif);
  // console.log("nav_prop_", props.navigation);

  return (
    <Box alignItems="center" marginBottom="5">
      <Box
        maxW="400"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "red",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "red",
        }}
      >
        <Box>
          <Stack p="4" space={3}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Product", { bungalow_id: props._id })
              }
            >
              <Image
                source={{
                  // adresse http stocker sur internet.
                  uri: props.image,
                }}
                // height='110%'
                // width='100%'
                style={styles.imageSize}
                alt="image"
              />
            </TouchableOpacity>

            <View style={styles.footerCard}>
              <Stack space={2}>
                <Heading size="xl" ml="-1" marginBottom="1">
                  {props.ville}
                </Heading>
              </Stack>
              <HStack space={4}>
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  backgroundColor="#EBE8FF"
                  width="100%"
                  padding="1"
                  borderRadius="5"
                >
                  <Badge colorScheme="success" alignSelf="center">
                    surface:
                  </Badge>
                  <Text style={styles.bodyCard}>{props.surface}m</Text>
                  <HStack justifyContent="flex-start" alignItems="center">
                    <Badge
                      colorScheme="success"
                      alignSelf="center"
                      // marginRight='1'
                    >
                      chambre:
                    </Badge>
                    <Text style={styles.bodyCard}>{props.chambre}ch</Text>
                  </HStack>
                  <HStack
                    backgroundColor="#EBF9FF"
                    padding="1"
                    borderRadius="5"
                  >
                    <View style={styles.containerBadge}>
                      <Text style={styles.bodyCard}>
                        Détails
                      </Text>
                      <FontAwesome
                        name="caret-right"
                        aria-hidden="true"
                        size={20}
                        color="#9747FF"
                      ></FontAwesome>
                    </View>
                  </HStack>
                </HStack>
              </HStack>
            </View>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  containerBadge: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 80,
  },
  imageSize: {
    height: 250,
    width: "100%",
    borderRadius: 10,
  },
  bodyCard: {
    fontFamily: "Poppins-Regular",
    fontSize: "16xl",
  },
  footerCard: {
    width: "100%",
  },
});
