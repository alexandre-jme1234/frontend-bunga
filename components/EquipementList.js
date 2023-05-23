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
  // import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import {
    View,
    StyleSheet
  } from 'react-native';
  
  export default function CardBungalow(props) {
    console.log("props", props);
    
    return (
    <Box style={styles.containerDetails}>
      <Box style={styles.containerDetails} alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >climatisation</Text>
        <Text >{props.climatisation}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >télévision</Text>
        <Text >{props.télévision}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >wifi</Text>
        <Text >{props.wifi}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >lave_vaisselle</Text>
        <Text >{props.lave_vaisselle}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >machineCafe</Text>
        <Text >{props.machineCafe}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >plancha</Text>
        <Text >{props.plancha}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >piscine</Text>
        <Text >{props.piscine}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >barbecue</Text>
        <Text >{props.barbecue}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box alignItems="center" marginBottom="5" backgroundColor="white">
        <Text >chien</Text>
        <Text >{props.chien}</Text>
        <View style={styles.borderLine}/>
      </Box>

    </Box>
    );
  }
  
  const styles = StyleSheet.create({
    containerDetails: {
        justifyContent: 'flex-start',
    },
    borderLine: {
        height: 1,
        width: 1,
        borderColor: 'blue'
    },

  })