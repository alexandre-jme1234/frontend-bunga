import {
  Center,
  Text,
  AspectRatio,
  Box,
  Image,
  HStack,
  Stack,
  Heading,
  Badge,
  Button,
} from "native-base";
import { saveSearchData } from "../reducers/searchResult";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CardBungalow(props) {
  console.log("props", props);
  
  return (
    <Box alignItems="center" marginBottom="5%" backgroundColor="white">
      <Text ></Text>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
<<<<<<< HEAD
              source={
                require('../assets/bungalowBackground.jpeg')
              }
              height='110%'
              width='100%'
=======
              source={{
                uri: props.image,
              }}
>>>>>>> filtre
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.nom}
            </Heading>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center" backgroundColor='#EBE8FF' width='280' padding='1' borderRadius='5'>
              <Badge colorScheme="success" alignSelf="center">
              surface: {props.surface}
              </Badge>
              <Badge colorScheme="success" alignSelf="center" margin="1">
              chambre: {props.chambre}
              </Badge>
              <HStack alignItems="center" backgroundColor='#EBF9FF' padding='1' borderRadius='5'>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
                marginLeft='5'
              >
            {/* TARIF N'EST PAS DANS BUNGALOW DISPO */}
                6 mins ago
              <FontAwesome name='caret-right' aria-hidden="true" size='20' color='#ec6e5b' margin="20%"></FontAwesome>
              </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
