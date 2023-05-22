
import { HStack, VStack, Badge, Text, ScrollView, Box, Image, Flatlist } from 'native-base';
import { Button, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  

export default function ProductScreen({ navigation }) {

  const selectPlageData = () => {
    navigation.navigate('PlageDate');
  }


  // TESTS FLATLIST

  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  },]


    return (
      <ScrollView style={styles.background}>
            <HStack space={3} justifyContent="center">
                  <Image
                          source={
                            require('../assets/bungalowBackground.jpeg')
                          }
                          height='110%'
                          width='100%'
                          alt="image"
                        /> 
            </HStack>
            
            <VStack space={4} alignItems="center">
                      <Text bold fontSize="sm">Ardèche</Text>
                      <Text bold fontSize="sm">Avis</Text>
            </VStack>
            
            <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center" space={4} backgroundColor='#EBE8FF' width='280' padding='1' borderRadius='5'>
                      <Badge colorScheme="success" alignSelf="center">
                        <FontAwesome name='caret-right' aria-hidden="true" size='20' color='#ec6e5b' margin="20%"></FontAwesome>
                      surface
                      </Badge>
                      <Badge colorScheme="success" alignSelf="center" margin="1">
                        <FontAwesome name='caret-right' aria-hidden="true" size='20' color='#ec6e5b' margin="20%"></FontAwesome>
                        surface
                      </Badge>
                      <Badge colorScheme="success" alignSelf="center" margin="1">
                        <FontAwesome name='caret-right' aria-hidden="true" size='20' color='#ec6e5b' margin="20%"></FontAwesome>
                        surface
                      </Badge>
                  </HStack>
            </HStack>
        
        
        <VStack space={4} alignItems="center">
          <Text bold fontSize="sm">Description</Text>
          <Text bold fontSize="xs">Petit bungalow cosi en bord d’Ardèche, profitez d’un cadre détente pour vous ressourcer vous et votre famille. Petit bungalow cosi en bord d’Ardèche, profitez d’un cadre détente pour vous ressourcer vous et votre famille.</Text>
        </VStack>


      <HStack alignItems="center" space={4} justifyContent="space-between">
        <FontAwesome name='caret-right' aria-hidden="true" size='10' color='#ec6e5b' margin="20%"></FontAwesome>
          <VStack space={4} alignItems="center">
            <Text bold fontSize="sm">Proprio</Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <Text bold fontSize="xs">730 évaluations</Text>
                <Text bold fontSize="xs">Avis</Text>
              </HStack>
          </VStack>
      </HStack>
        <Button size="sm" variant="subtle" onPress={() => { selectPlageData(); }} title="Bungalow! Go to PlageDate">Voir les disponibilités du lieu</Button>
      {/* <Box >
        <Flatlist data={data} renderItem={({ item }) => 
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <VStack>
                    <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                      Cuisine
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      équipé
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            } keyExtractor={item => item.id} />
        </Box>; */}
      </ScrollView>
    );
    }

const styles = StyleSheet.create({
    // background: {
    // flex: 1,
    // backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
    //   width: '100%',
    //   height: '100%',
    // },
});

