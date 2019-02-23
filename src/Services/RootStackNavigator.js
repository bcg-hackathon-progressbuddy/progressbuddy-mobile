import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from '../Home';
import Login from '../Login';
// import Appointments from '../Appointments';

class Empty extends React.Component {
    static navigationOptions = () => ({
        header: null,
    });

    render() {
        return null;
    }
}

const routeConfig = {
    Empty: {
        screen: Empty,
    },
    Login: {
        screen: Login,
    },
    // Help: {
    //     screen: Help,
    // },
    Home: {
        screen: Home,
    },
    // Appointments: {
    //     screen: Appointments,
    // },
};

const stackNavigatorConfig = {
    initialRouteName: 'Empty',
};

const RootStackNavigator = createStackNavigator(routeConfig, stackNavigatorConfig);

export default RootStackNavigator;