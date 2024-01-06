import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import theme from '../../../Assets/Themes/theme';
import {SvgFromXml} from 'react-native-svg';
import {View} from 'react-native';
import Icons from '../../../Assets/Icons';
import SearchScreen3 from './SearchScreen3';
import BusinessList from './BusinessList';
import AlertScreen from './AlertScreen';
import NotificationScreen from './NotificationScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const tabStyle = {
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 35,
    justifyContent: 'center',
  };

  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
      }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            height: 0,
            width: 0,
          },
          tabBarStyle: {
            height: '10%',
            bottom: 0,
            width: '100%',
            right: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: theme.colors.White,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  ...tabStyle,
                  backgroundColor: focused
                    ? theme.colors.ButtonBackground
                    : theme.colors.Transparent,
                }}>
                <SvgFromXml
                  xml={Icons.HomeIcon}
                  style={{color: focused ? theme.colors.Blue  : 'transparent'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="BusinessList"
          component={BusinessList}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  ...tabStyle,
                  backgroundColor: focused
                    ? theme.colors.ButtonBackground
                    : theme.colors.Transparent,
                }}>
                <SvgFromXml
                  xml={Icons.TicketIcon}
                  style={{color: focused ? theme.colors.Blue  : 'transparent'}}
                />
              </View>
            ),
          }}
        />
        
        <Tab.Screen
          name="SearchScreen3"
          component={SearchScreen3}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  ...tabStyle,
                  backgroundColor: focused
                    ? theme.colors.ButtonBackground
                    : theme.colors.Transparent,
                }}>
                <SvgFromXml
                  xml={Icons.HeartIcon}
                  style={{color: focused ? theme.colors.Blue : 'transparent'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  ...tabStyle,
                  backgroundColor: focused
                    ? theme.colors.ButtonBackground
                    : theme.colors.Transparent,
                }}>
                <SvgFromXml
                  xml={Icons.ProfileIcon}
                  style={{color: focused ? theme.colors.Blue  : 'transparent'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AlertScreen"
          component={AlertScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  ...tabStyle,
                  backgroundColor: focused
                    ? theme.colors.ButtonBackground
                    : theme.colors.Transparent,
                }}>
                <SvgFromXml
                  xml={Icons.AlertIcon}
                  style={{color: focused ? theme.colors.Blue  : 'transparent'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  ...tabStyle,
                  backgroundColor: focused
                    ? theme.colors.ButtonBackground
                    : theme.colors.Transparent,
                }}>
                <SvgFromXml
                  xml={Icons.NotificationIcon}
                  style={{color: focused ? theme.colors.Blue  : 'transparent'}}
                />
              </View>
            ),
          }}
        />

      </Tab.Navigator>
    </View>
  );
}

export default BottomTabs;
