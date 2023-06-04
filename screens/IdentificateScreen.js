import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Modal,
  Pressable,
  Alert,
  Image,
} from "react-native";
import { Button } from "native-base";

export default function IdentificateScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/logoBunga.jpg")} />
      <Text style={styles.title}>Bienvenue sur BungaBun</Text>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpenSignIn]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Sign In</Text>
        </Pressable>
        <Text style={styles.textStyle}>ou</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpenSignUp]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: "#F8FFFF",
    fontFamily: "Poppins-Regular",
    // textAlign: 'center',
    paddingLeft: 30,
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#305775",
  },
  centeredView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 22,
  },
  image: {
    marginTop: 100,
    width: "20%",
    height: "10%",
    backgroundColor: "#305775",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: "#F8FFFF",
  },
  buttonOpenSignUp: {
    backgroundColor: "#34D399",
  },
  buttonOpenSignIn: {
    backgroundColor: "#0891B2",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    color: "#F8FFFF",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
