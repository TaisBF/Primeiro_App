import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import Texto from '../../Componets/Texto'

import Details from "./Componets/Details";
import Topo from '../Cesta/Componets/Topo';
import Item from "./Componets/Item";



export default function Cesta({ topo, detalhes, itens }) {
  return <>   
      
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={() => {
        return <> 
          <Topo {...topo}/>
          <View style={estilos.cesta}>
            <Details  {...detalhes}/>
            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
          </View>

        </>
      }}
    />



      
  </>
}

const estilos = StyleSheet.create({

  titulo:{
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32, 
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    textAlign: 'center'
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 26,
  },
    
   
});