import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



import Home from '../screens/home';
import Ajuda from '../screens/ajuda';
import Main from '../screens/main';
import QnA from '../screens/QnA';
import Denuncia from '../screens/denuncia';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="MILABAG">
                <Drawer.Screen name="MILABAG" component={Main} />
                <Drawer.Screen name="Denuncia" component={Denuncia} />
                <Drawer.Screen name="Ajuda" component={Ajuda} />
                <Drawer.Screen name="Perguntas frequentes" component={QnA} />
            </Drawer.Navigator>
    );
}

export function AppNav() {
    return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name=" " component={Home} />
        <Stack.Screen name="MILABAG" component={DrawerNavigator} />
    </Stack.Navigator>
        </NavigationContainer>
    );
}
