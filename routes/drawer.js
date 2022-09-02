import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/home';
import Ajuda from '../screens/ajuda';
import Main from '../screens/main';
import QnA from '../screens/QnA';
import Denuncia from '../screens/denuncia';

const Drawer = createDrawerNavigator();
const homeStack = createStackNavigator()

export function AppNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="MILABAG" component={Main} />
                <Drawer.Screen name="Denuncia" component={Denuncia} />
                <Drawer.Screen name="Ajuda" component={Ajuda} />
                <Drawer.Screen name="Perguntas frequentes" component={QnA} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


export const HomeStack = () => {
    return (
        <homeStack.Navigator>
            <homeStack.Screen name="Home" component={Home} />
            <homeStack.Screen name=" " component={Nav} />
        </homeStack.Navigator>
    )
}

// const RootDrawerNavigator = createDrawerNavigator({
//     Home: {
//         screen: HomeStack,
//     },
//     Denuncia: {
//         screen: DenunciaStack,
//     },
//     Ajuda: {
//         screen: AjudaStack,
//     },
//     QnA: {
//         screen: QnAStack,
//     }
// })



//export default createAppContainer(RootDrawerNavigator);