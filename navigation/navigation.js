import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import ViewPhotos from '../screen/viewphotos/viewphotos';
import Reserve from '../screen/reserve/reserve';
import Home from '../screen/home';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator 
              initialRouteName="Home"
              screenOptions={({ route, navigation}) => ({
                headerShown: false,
                gestureEnabled:true,
                cardOverlayEnabled:true,
              })}
          >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Reserve" component={Reserve} />
            <Stack.Screen name="Photos" component={ViewPhotos}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }