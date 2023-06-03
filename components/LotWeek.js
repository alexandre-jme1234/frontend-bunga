import { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "native-base";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function LotWeek(props) {

  const { bungalow_id } = props.route.params
  console.log('props LotWeek', props)
  const searchResult = useSelector((state) => state.searchResult.value);

  const bungalowsFilter = searchResult.filter((e) => e._id === bungalow_id);
  const [isPress, setIsPress] = useState(false);

  console.log('bungalowsFilter', bungalowsFilter)



  var touchProps = {
    activeOpacity: 1,
    underlayColor: "blue",
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("GOOD STATE"),
  };

  const handleSelectionLotsWeek = () => {};

  return (
    <Box style={styles.plageData}>
      <View style={styles.blocText}>
          <Text>Période</Text>
          <Text>{bungalowsFilter[0].chambre}</Text>
          <Text>au</Text>
          <Text>{bungalowsFilter[0].chambre}</Text>
          <Text>{bungalowsFilter[0].chambre}</Text>   
      </View>
        <TouchableHighlight {...touchProps} onPress={() => {}}>
          <View style={styles.button}>
            <Text>Rechercher</Text>
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
    width: '65%'
  },
  plageData: {
    flexDirection: 'row',
    alignItems: 'center',
    height: "140%",
    width: "100%",
    backgroundColor: "red",
    borderRadius: "10",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  btnNormal: {
    borderColor: "blue",
    backgroundColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 100,
  },
  btnPress: {
    borderColor: "#94F2AA",
    backgroundColor: '#94F2AA',
    borderWidth: 1,
    height: 40,
    width: 100,
  },
});
