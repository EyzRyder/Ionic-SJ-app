import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Nav from '../screens/navigate';


const homeStack = createStackNavigator()

export const HomeStack = () => {
    return (
        <homeStack.Navigator>
            <homeStack.Screen name="Home" component={Home} />
            <homeStack.Screen name=" " component={Nav} />
        </homeStack.Navigator>
    )
}

// const screens = {
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             title: 'MILABAG',
//         }
//     },
//     Main: {
//         screen: Main,
//         navigationOptions: {
//             title: 'MILABAG',
//         }
//     }
// }

// const HomeStack = createStackNavigator(screens,
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: 'red',
//                 borderBottomColor: 'black',
//                 borderBottomWidth: 0,
//                 boxShadow: 'none',
//             }
//         }
//     });
// export default HomeStack;