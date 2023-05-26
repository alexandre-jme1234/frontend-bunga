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
      <Text>Période</Text>
      <Text>{bungalowsFilter[0].chambre}</Text>
      <Text>au</Text>
      <Text>{bungalowsFilter[0].chambre}</Text>
      <Text>{bungalowsFilter[0].chambre}</Text>
        <TouchableHighlight {...touchProps} onPress={() => {}}>
          <View style={styles.button}>
            <Text>Rechercher</Text>
          </View>
        </TouchableHighlight>
    </Box>
  );
}

const styles = StyleSheet.create({
  plageData: {
    height: "10%",
    width: "100%",
    backgroundColor: "#EAEAEA",
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
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: "#94F2AA",
    backgroundColor: '#94F2AA',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
});
