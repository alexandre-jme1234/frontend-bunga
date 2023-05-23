import { useState } from "react";
import { Box, Text, Button } from "native-base";
import {
    StyleSheet
  } from 'react-native';

export default function LotWeek() {
    
    const[lotWeeks, setLotWeeks ] = useState(false);
    

// Réfléchir à ce useState.


    const addLotsWeek = () => {
        lotWeeks == true;
    }
    
    return (
        <Box style={styles.plageData}>
            <Text>Décembre</Text>
            <Text>1/12</Text>
            <Text>au</Text>
            <Text>15/12</Text>
            <Text>100€</Text>
            <Button
          size="sm"
          variant="subtle"
          onPress={() => {
            addLotsWeek();
          }}
        >
          Rechercher
        </Button>
        </Box>
    );
}

const styles = StyleSheet.create({
    plageData: {
        height: '10%',
        width: '100%',
        backgroundColor: '#EAEAEA',
        borderRadius: '10'
    }
})