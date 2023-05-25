import {
    Text,
    Box,
    HStack,
  } from "native-base";
  import { saveSearchData } from "../reducers/searchResult";
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import {
    View,
    StyleSheet
  } from 'react-native';
  
  export default function EquipementList(props) {
    console.log('props', props)
    // console.log('reservation', reservation);
    
    // const equipmentsName = [
    //     {nameEquip: 'fa-television'},
    //     {nameEquip: 'télévision'},
    //     {nameEquip: 'wifi'},
    //     {nameEquip: 'lave_vaisselle'},
    //     {nameEquip: 'machineCafe'},
    //     {nameEquip: 'plancha'},
    //     {nameEquip: 'piscine'},
    //     {nameEquip: 'barbecue'},
    //     {nameEquip: 'chien'}
    // ]
    // const equipmentsNameList = equipmentsName.map((data, i) => {
    //     console.log(data.nameEquip)
    //     return (
    //         <Box style={styles.containerDetails} alignItems="center" marginBottom="5" backgroundColor="white">
    //             <Text key={i}>{data.nameEquip}</Text> cx 
    //         </Box>
    //     )
    // })

    console.log(props)
    return (
    <Box style={styles.containerDetails}>
        {/* <View>{equipmentsNameList}</View> */}
        <View style={styles.borderLine}/>
        <Text  style={styles.title}>Détails</Text>
      <Box style={styles.boxEquipement}>
      <HStack alignItems='center'>
      <FontAwesome name='television' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement}>Télévision</Text>
      </HStack>
        <Text >{props.télévision}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box style={styles.boxEquipement}>
        <HStack alignItems='center'>
        <FontAwesome name='wifi' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement} >Wifi</Text>
        </HStack>
        <Text >{props.wifi}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box style={styles.boxEquipement}>
      <HStack alignItems='center'>
        <FontAwesome name='tint' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement}>Lave_vaisselle</Text>
        </HStack>
        <Text >{props.lave_vaisselle}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box style={styles.boxEquipement}>
      <HStack alignItems='center'>
        <FontAwesome name='coffee' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement}>MachineCafe</Text>
        </HStack>
        <Text >{props.machineCafe}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box style={styles.boxEquipement}>
      <HStack alignItems='center'>
        <FontAwesome name='cutlery' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement}>Plancha</Text>
        </HStack>
        <Text >{props.plancha}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box style={styles.boxEquipement}>
      <HStack alignItems='center'>
        <FontAwesome name='life-ring' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement}>Piscine</Text>
        </HStack>
        <Text >{props.piscine}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box style={styles.boxEquipement}>
      <HStack alignItems='center'>
        <FontAwesome name='fire' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement}>Barbecue</Text>
        </HStack>
        <Text >{props.barbecue}</Text>
        <View style={styles.borderLine}/>
      </Box>
      <Box style={styles.boxEquipement}>
      <HStack alignItems='center'>
        <FontAwesome name='leaf' aria-hidden="true" size={20} style={styles.iconStyle}></FontAwesome>
        <Text style={styles.titleEquipement}>Chien</Text>
        </HStack>
        <Text >{props.chien}</Text>
        <View style={styles.borderLine}/>
      </Box>
    </Box>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Poppins-Regular',
      fontSize: 30,
      // fontWeight: 'bold',
      marginLeft: 5,
      paddingTop: 20
    },
    titleEquipement: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16
    },
    iconStyle: {
      color: '#737373',
      margin: "2%"
    },
    boxEquipement: {
       marginBottom:5,
       backgroundColor:"#FDFAFA", 
       alignItems:'flex-start',
       padding: 10,
       marginBottom: 10,
       borderRadius: 10
    },
    containerDetails: {
        justifyContent: 'flex-start',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15
    },
    borderLine: {
        height: 1,
        width: 1,
        borderColor: 'blue'
    },

  })