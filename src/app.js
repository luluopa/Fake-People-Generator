import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage';

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
          title: route.params.person.name.first,
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
