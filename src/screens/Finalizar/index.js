import React, { createRef, useState } from "react";
import { Text, View, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { estilos } from './estilos';
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";
import LottieView from 'lottie-react-native'


export default function Finalizar({ navigation }) {
    let animation = createRef()

    const { temaEscolhido } = useContext(TemaContext)

    const { usuario } = useContext(AutenticacaoContext)
    const { quantidade, carrinho, precoTotal, finalizarCompra } = useContext(ProdutosContext)

    const [opacity, setOpacity] = useState(0)

    const total = carrinho.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual.preco
    }, 0)

    function startAnimation() {
        animation.current.play()
    }

    async function finalizar() {
        const resultado = await finalizarCompra();
        setTimeout(() => {
            navigation.navigate('Principal');
            Alert.alert(resultado);
            setOpacity(0)
        }, 2000)
    }

    const estilo = estilos(temaEscolhido, opacity)

    return (
        <View style={estilo.container}>
            <StatusBar />

            <View style={estilo.enderecoArea}>
                <Text style={estilo.titulo}>Informaçoes da entrega</Text>

                <Text style={estilo.texto}>Nome: {usuario.nome}</Text>
                <Text style={estilo.texto}>Endereço: {usuario.endereco}</Text>
                <Text style={estilo.texto}>Email: {usuario.email}</Text>
                <Text style={estilo.texto}>Telefone: {usuario.telefone}</Text>
            </View>

            <View style={estilo.animationContainer}>
                <LottieView
                    source={require('../../../assets/check.json')}
                    style={estilo.animation}
                    loop={false}
                    ref={animation}
                />
            </View>

            <View style={estilo.resumoArea}>
                <Text style={estilo.texto}>Quantidade {quantidade}</Text>
                <Text style={estilo.texto}>Preço Total: R${total}</Text>
            </View>

            <TouchableOpacity style={estilo.btn} onPress={async () => {
                setOpacity(1)
                startAnimation()
                finalizar()
            }}>
                <Text style={estilo.btnTexto}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    );
}
