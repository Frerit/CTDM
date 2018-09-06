

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Button,Image,
} from 'react-native';


import { createStackNavigator } from 'react-navigation';
import Catalogo from './src/scenes/Catalogo';
import Mercado from './src/scenes/Mercado';
import Detalle from './src/scenes/Detalle';
import Carrito from './src/scenes/Carrito';
import Formulario from './src/scenes/Formulario';
import Success from './src/scenes/Success';

const AppNavigator = createStackNavigator({
  CatalogoScreen: {
    screen: Catalogo
  },
  MercadoScreen: {
    screen: Mercado
  },

  DetalleScreen: {
    screen: Detalle
  },

  CarritoScreen: {
    screen: Carrito
  },
  FormularioScreen: {
    screen: Formulario
  },
  SuccessScreen: {
    screen: Success
  },
},
  {
    initialRouteName: 'MercadoScreen',
      headerMode: 'none',
  }

);



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <AppNavigator />

    );
  }
}


