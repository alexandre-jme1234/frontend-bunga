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
// import { saveSearchData } from "../reducers/searchResult";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CardBungalow(props) {
  console.log("props_cards__", props);
  
  return (
    <Box alignItems="center" marginBottom="5%">
      <Text ></Text>
      <Box
        maxW="80"
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
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              // source={{
              //   uri: props.image,
              // }}
              height='110%'
              width='100%'
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">kutfyt
            </Heading>
          </Stack>
          <HStack space={4}>
            <HStack alignItems="center" backgroundColor='#674DCF' width='100%' padding='1' borderRadius='5' >
              <Badge colorScheme="success" alignSelf="center">
              surface:
              </Badge>
              <Badge colorScheme="success" alignSelf="center" margin="1" marginRight='10'>
              chambre: 
              </Badge>
              <HStack backgroundColor='#EBF9FF' padding='1' borderRadius='5'>
              {/* <Text
                // color="coolGray.600"
                marginRight='2
                // _dark={{
                //   color: "warmGray.200",
                // }}
                // fontWeight="400"
                // marginLeft='5',
              > */}
            {/* TARIF N'EST PAS DANS BUNGALOW DISPO */}
                {/* 6 mins ago */}
              {/* </Text> */}
              <FontAwesome name='caret-right' aria-hidden="true" size='20' color='#ec6e5b'></FontAwesome>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
