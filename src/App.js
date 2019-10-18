import React from 'react'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Feed from './screens/Feed';
import Explore from './screens/Explore';
import Create from './screens/Create';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faCookie, faHome, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

const navigatorIconColor = 'white';

const Navigator = createMaterialBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
          tabBarIcon: <FontAwesomeIcon icon={faHome} color={ navigatorIconColor }/>,
      },
    },
    Explore: {
      screen: Explore,
        navigationOptions: {
            tabBarIcon: <FontAwesomeIcon icon={faSearch} color={navigatorIconColor}/>,
        },
    },
    Create: {
      screen: Create,
        navigationOptions: {
            tabBarIcon: <FontAwesomeIcon icon={faCamera} size={25} color={navigatorIconColor}/>,
        },
    },
      Notifications: {
          screen: Notifications,
          navigationOptions: {
              tabBarIcon: <FontAwesomeIcon icon={faCookie} color={navigatorIconColor}/>,
          },
      },
    Profile: {
      screen: Profile,
        navigationOptions: {
            tabBarIcon: <FontAwesomeIcon icon={faUser} color={navigatorIconColor}/>,
        },
    },
  },
  {
    initialRouteName: 'Feed',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
  },
);

export default createAppContainer(Navigator);
