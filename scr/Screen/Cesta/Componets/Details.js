import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Texto from '../../../Componets/Texto';

export default function Details({ nome,logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imgFazenda} source={logoFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
        <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}


const estilos = StyleSheet.create({

    nome:{
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    fazenda: {
        paddingVertical: 12,
        flexDirection:'row',
    },
    imgFazenda: {
        width:32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color:'#A3A3A3',
        fontSize: 15, 
        lineHeight: 26,

    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 5,
    }, 
    botao:{
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 15, 
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        lineHeight: 26,
        fontWeight: 'bold',
    },
});