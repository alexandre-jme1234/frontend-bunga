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
  TouchableOpacity
} from "react-native";
import { Button, Input } from "native-base";
import SignIn from "../components/SignIn";
import Password from "antd/es/input/Password";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function IdentificateScreen({ navigation }) {
  const [modalVisibleSignin, setModalVisibleSignin] = useState(false);
  const [modalVisibleSignup, setModalVisibleSignup ] = useState(false);
  
  // ------ TEST

  const [users, setUsers] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] =  useState('');

  const emailChange = (text) => setEmail(text);
  const passwordChange = (text) => setPassword(text);
  const roleChange = (text) => setRole(text);
  const entrepriseChange = (text) => setEntreprise(text);
  const prenomChange = (text) => setPrenom(text);
  const nomChange = (text) => setNom(text);

  // console.log("emailChange _", email);
  // console.log("passwordChange _", password);

  const handleSubmit = () => {
    console.log('Good Co!')
    fetch("http://10.0.1.187:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data results _", data);
          data.result && navigation.navigate("Launching")
          setModalVisibleSignin(!modalVisibleSignin)
      });
  };


  const handleSubmitSignUp = () => {
    fetch("http://10.0.1.187:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, entreprise, role, prenom, nom }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data results _", data);
          data.result && navigation.navigate("Launching")
          setModalVisibleSignup(!modalVisibleSignup)
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/logoBunga.jpg")} />
      <Text style={styles.title}>Bienvenue sur BungaBun</Text>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleSignin}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisibleSignin(!modalVisibleSignin);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => setModalVisibleSignin(!modalVisibleSignin)}>
            <FontAwesome
                        name="close"
                        aria-hidden="true"
                        size={20}
                        color="#9747FF"
                      ></FontAwesome>
            </TouchableOpacity>
            </View>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}>Identifiez-vous</Text>
              <View style={{justifyContent: 'space-around', height: '50%'}}>
              <Input
                style={styles.input}
                variant="underlined"
                placeholder="Rechercher votre email"
                onChangeText={emailChange}
                value={email}
              />
              <Input
                style={styles.input}
                variant="underlined"
                placeholder="Renseigner votre password"
                onChangeText={passwordChange}
                value={password}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                // onClick={() => setModalVisible(!modalVisible)}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.textStyle}>Valider</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpenSignIn]}
          onPress={() => setModalVisibleSignin(true)}
        >
          <Text style={styles.textStyle}>Sign In</Text>
        </Pressable>
        <Text style={styles.textStyle}>ou</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleSignup}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisibleSignup(!modalVisibleSignup);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => setModalVisibleSignup(!modalVisibleSignup)}>
            <FontAwesome
                        name="close"
                        aria-hidden="true"
                        size={20}
                        color="#9747FF"
                      ></FontAwesome>
            </TouchableOpacity>
            </View>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}>Inscrivez-vous</Text>
              <View style={{justifyContent: 'space-around', height: '65%'}}>
                <Input
                 style={styles.input}
                 variant="underlined"
                 placeholder="Renseigner votre prenom"
                 onChangeText={prenomChange}
                 value={prenom}
               />
                <Input
                 style={styles.input}
                 variant="underlined"
                 placeholder="Renseigner votre nom"
                 onChangeText={nomChange}
                 value={nom}
               />
              <Input
                style={styles.input}
                variant="underlined"
                placeholder="Rechercher votre email"
                onChangeText={emailChange}
                value={email}
              />
              <Input
                style={styles.input}
                variant="underlined"
                placeholder="Renseigner votre password"
                onChangeText={passwordChange}
                value={password}
              />
               <Input
                style={styles.input}
                variant="underlined"
                placeholder="Renseigner votre entreprise"
                onChangeText={entrepriseChange}
                value={entreprise}
              />
               <Input
                style={styles.input}
                variant="underlined"
                placeholder="Renseigner votre role"
                onChangeText={roleChange}
                value={role}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                // onClick={() => setModalVisible(!modalVisible)}
                onPress={() => handleSubmitSignUp()}
              >
                <Text style={styles.textStyle}>Valider</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpenSignUp]}
          onPress={() => setModalVisibleSignup(true)}
        >
          <Text style={styles.textStyle}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Poppins-Regular",
  },
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#305775",
  },
  centeredView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: '30%',
    // backgroundColor: 'red'
  },
  image: {
    marginTop: 100,
    width: "20%",
    height: "10%",
  },
  modalView: {
    margin: 20,
    width: '70%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 40,
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
