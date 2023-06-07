import { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "native-base";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import moment from "moment";

export default function LotWeek(props) {
  const { bungalow_id } = props.route.params

  console.log('props LotWeek', props)
  const searchResult = useSelector((state) => state.searchResult.value);

  const bungalowsFilter = searchResult.filter((e) => e._id === bungalow_id);
  const [isPress, setIsPress] = useState(false);

  const dateDebut = moment(bungalowsFilter[0].disponibilites[0].dateDebut).format("MMM Do YY");
  const dateFin = moment(bungalowsFilter[0].disponibilites[0].dateFin).format("MMM Do YY");

  console.log('bungalowsFilter', bungalowsFilter[0].disponibilites[0])


  var touchProps = {
    activeOpacity: 1,
    underlayColor: "blue",
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("GOOD STATE"),
  };

  return (
    <Box style={styles.plageData}>
      <View style={styles.blocText}>
          <Text style={{width: '21%'}}>Période</Text>
          <Text  style={{width: '27%'}}>{dateDebut}</Text>
          <Text style={{width: '7%'}}>au</Text>
          <Text style={{width: '30%'}}>{dateFin}</Text>
      </View>
        <TouchableHighlight {...touchProps} onPress={() => {}}>
          <View style={styles.button}>
          <FontAwesome
            name="plus-square-o"
            aria-hidden="true"
            size={20}
            style={styles.iconStyle}
          ></FontAwesome>
          </View>
        </TouchableHighlight>
    </Box>
  );
}

const styles = StyleSheet.create({
  blocText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10,
    width: '80%'
  },
  plageData: {
    flexDirection: 'row',
    alignItems: 'center',
    height: "140%",
    width: "110%",
    backgroundColor: "#EAEAEA",
    borderRadius: "10",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },
  btnNormal: {
    borderColor: "blue",
    backgroundColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 50,
  },
  btnPress: {
    borderColor: "#94F2AA",
    backgroundColor: '#94F2AA',
    borderWidth: 1,
    height: 40,
    width: 100,
  },
});
