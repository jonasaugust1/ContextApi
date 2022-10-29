import React from "react";
import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { estilos } from './estilos';
import { TemaContext } from "../../contexts/TemaContext";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const {temaEscolhido} = useContext(TemaContext)
    const {login} = useContext(AutenticacaoContext)

    function logar() {
        const resultado = login(email, senha)
        if(resultado === 'ok') {
            navigation.navigate('Principal')
        }else {
            Alert.alert(resultado)
        }
    }

    const estilo = estilos(temaEscolhido)

    return (
        <View style={estilo.container}>
            <StatusBar />
            <Text style={estilo.titulo}>Login</Text>

            <View style={estilo.inputArea}>
                <TextInput
                    style={estilo.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={estilo.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity
                style={estilo.botao}
                onPress={logar}
            >
                <Text style={estilo.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}
