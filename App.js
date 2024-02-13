import React  from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './scr/Screen/Cesta/Index';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import mock from './scr/Mocks/cesta'

export default function App() {
  const [fonCarregada] = useFonts({
    "Montserrat_400Regular": Montserrat_400Regular,
    "Montserrat_700Bold": Montserrat_700Bold,
  });
  if (!fonCarregada) {
    return <View />;  
  }
  

  return (
    <SafeAreaView style={{flex:1}}>
      <Cesta {...mock} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


