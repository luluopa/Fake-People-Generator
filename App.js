import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailPage from './src/pages/DetailPage';
import ListPage from './src/pages/ListPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListPage} options={{
          title:'Fake People Generator',
          headerTitleStyle:{
            color:'white'
          },
          headerStyle:{
            backgroundColor: '#E13b3f'
          }
        }}/>
        <Stack.Screen name="Detail" component={DetailPage} options={({route}) => ({
          title: route.params.people.name.first,
          headerStyle:{
            backgroundColor:  '#E13b3f'
          },
          headerTitleStyle:{
            color:"white"
          },
          headerTintColor:"white"
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
