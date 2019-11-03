import React from 'react'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Home from './screens/Home';
import Explore from './screens/Explore';
import Create from './screens/Create';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';


Icon.loadFont();
MIcon.loadFont();

const size = 24;
const Navigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
          tabBarIcon: ({tintColor}) => <MIcon name="home-variant" size={size}  color={tintColor} />,
          labeled: false,
      },
    },
    Explore: {
      screen: Explore,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name="search" size={size} color={tintColor} />,
            labeled: false
        },
    },
    Create: {
      screen: Create,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <MIcon name="plus" size={size} color={tintColor} />,
            labeled: false
        },
    },
      Notifications: {
          screen: Notifications,
          navigationOptions: {
              tabBarIcon: ({tintColor}) => <MIcon name="cookie" size={size} color={tintColor} />,
              labeled: false
          },
      },
    Profile: {
      screen: Profile,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name="user" size={size} color={tintColor} />,
            labeled: false
        },
    },
  },
  {
      shifting: true,
      initialRouteName: 'Home',
      activeColor: '#000',
      inactiveColor: '#999',
      tabBarOptions: {
          activeTintColor: '#e91e63',
      },
        barStyle: {backgroundColor: '#fff'},
  },
);

export default createAppContainer(Navigator);
