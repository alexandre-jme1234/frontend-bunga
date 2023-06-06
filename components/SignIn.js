import React from 'react';
import {
    Button
} from 'native-base';
import {
    View,
    Input,
    StyleSheet
} from 'react-native';
// import styles from "../styles/Modals.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { login, logout } from "../reducers/users";
// import { Button, Modal } from 'antd';


function SignIn() {
    // const dispatch = useDispatch();
    // const user = useSelector((state) => state.user.value);
    // const router = useRouter();
    // if (user.token) {
    //   router.push('/');
    // }

    const [entreprise, setEntreprise] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        fetch('http://10.0.2.155:19000/users/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, entreprise }),
        }).then(response => response.json())
          .then(data => {
            console.log('DATA', data)
            data.result && console.log('Good!');
          });
      };

    return (
        <View style={styles.container}>
            <Input type="text" className={styles.input} onChange={(e) => setEntreprise(e.target.value)} value={entreprise} placeholder="Entreprise" />
            <Input type="text" className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
            <Input type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
            <Button size="sm"
                variant="subtle" 
                onPress={() => handleSubmit()}
                >Sign in</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default SignIn;