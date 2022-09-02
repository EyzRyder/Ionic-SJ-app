import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Denuncia from '../screens/denuncia';
import Ajuda from '../screens/ajuda';
import QA from '../screens/Q&A';
import Main from '../screens/main';

const screens = {
    Home: {
        screen: Home,
    },
    Main: {
        screen: Main,
    },
    Denuncia: {
        screen: Denuncia,
    },
    Ajuda: {
        screen: Ajuda,
    },
    QA: {
        screen: QA,
    }
}

const HomeStack = createStackNavigator(screens,
    {
        // defaultNavigationOptions: {
        //     title: '',
        //     headerStyle: {
        //         backgroundColor: 'red',
        //         borderBottomColor: 'black',
        //         borderBottomWidth: 1,
        //         boxShadow: 'none',
        //     }
        // }
    });
export default createAppContainer(HomeStack);