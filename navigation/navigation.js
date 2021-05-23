import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import App from '../App';
import ViewPhotos from '../screen/viewphotos/viewphotos';
import Reserve from '../screen/reserve/reserve';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={App} options={{ title: 'Bem vindo' }}/>
            <Stack.Screen name="Reserve" component={Reserve} />
            <Stack.Screen name="Photos" component={ViewPhotos}/>s
          </Stack.Navigator>
        </NavigationContainer>
      );
    }