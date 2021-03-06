import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import NewPassowrd from "./NewPassword";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("TabNavigator")
            }
        })

        return unsubscribe
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <View
            behavior='padding'
            style={styles.container}
            disabled
        >
            <Title style={styles.header}>Login</Title>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    keyboardType='email-address'
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={() => { navigation.navigate("NewPassword") }}
                >
                    <Text style={{ color: 'royalblue', marginTop: 10 }}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.img}
                    source={require('../assets/images/PMlogo.png')}
                />
                <Text style={styles.logo}>??Patient</Text>
                <Text style={styles.logo}>Monitoring</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.button}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat_500Medium',
    },
    header: {
        fontSize: 23,
        opacity: 0.9,
        fontWeight: '700',
        transform: [{ translateY: -60 }],
    },
    inputContainer: {
        width: '80%',
        height: '30%',
        bottom: 20,
    },
    input: {
        paddingHorizontal: 1,
        paddingVertical: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: '#696969',
        fontSize: 15,
        fontFamily: 'Montserrat_500Medium',
    },
    buttonContainer: {
        top: 30,
        borderRadius: 50,
        width: '80%',
    },
    button: {
        color: 'white',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 15,
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#4166f5',
        padding: 8,
        borderRadius: 25,
    },
    logoContainer: {
        alignItems: 'center',
        bottom: 30,
    },
    img: {
        height: 90,
        width: 90,
        marginBottom: 20,
    },
    logo: {
        textAlign: 'center',
        fontSize: 30,
    },
});