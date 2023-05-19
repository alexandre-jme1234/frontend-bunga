
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProductScreen({ navigation }) {
 return (
   <View style={styles.background}>
     <Text>Home Screen</Text>
     <Button
       title="Bungalow! Go to PlageDate"
       onPress={() => navigation.navigate('PlageDate')}
     />
   </View>
 );
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
});

{/* <CardBungalow key={i} 
    
    // ----------- PROPS BUNGALOW
    nom={data.bungalow_dispo[0].nom}
    surface={data.bungalow_dispo[0].surface}
    chambre={data.bungalow_dispo[0].chambre}
    terrasse={data.bungalow_dispo[0].terrasse}
    capaciteAdulte={data.bungalow_dispo[0].capaciteAdulte}
    capaciteEnfant={data.bungalow_dispo[0].capaciteEnfant}
    adresse1={data.bungalow_dispo[0].adresse1}
    adresse2={data.bungalow_dispo[0].adresse2}
    ville={data.bungalow_dispo[0].ville}
    codePostal={data.bungalow_dispo[0].codePostal}
    departementNom={data.bungalow_dispo[0].departementNom}
    image={data.bungalow_dispo[0].image}
    
    // ----------- PROPS OPTIONS DU BUNGALOW
    climatisation={data.bungalow_dispo[0].climatisation}
    télévision={data.bungalow_dispo[0].télévision}
    wifi={data.bungalow_dispo[0].wifi}
    lave_vaisselle={data.bungalow_dispo[0].lave_vaisselle}
    machineCafe={data.bungalow_dispo[0].machineCafe}
    plancha={data.bungalow_dispo[0].plancha}
    piscine={data.bungalow_dispo[0].piscine}
    barbecue={data.bungalow_dispo[0].barbecue}
    chien={data.bungalow_dispo[0].chien}

    // ----------- PROPS PROPRIO
    proprio_prenom={data.bungalow_dispo[0].proprietaire.prenom}
    proprio_nom={data.bungalow_dispo[0].proprietaire.nom}
    proprio_email={data.bungalow_dispo[0].proprietaire.email}
    />; */}