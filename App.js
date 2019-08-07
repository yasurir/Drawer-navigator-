/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { View, Image, Platform,StyleSheet,ImageBackground, TouchableOpacity,Text} from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
 
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
 
class NavigationDrawerStructure extends Component {
  
  toggleDrawer = () => {
    
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
          
        
      </View>
    );
  }
}
 

const FirstActivity_StackNavigator = createStackNavigator({
  
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Account Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#a98274',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Screen2_StackNavigator = createStackNavigator({
 
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Notification Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#a98274',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
 
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#a98274',
      },
      headerTintColor: '#fff',
    }),
  },
});

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
  },
  headerContainer: {
      height: 150,
  },
  headerText: {
      color: '#fff8f8',
  },
  screenContainer: { 
    paddingTop: 20,
    width: '100%',
},
screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
},
screenTextStyle:{
    fontSize: 20,
    marginLeft: 20, 
    textAlign: 'center'
},
selectedTextStyle: {
    fontWeight: 'bold',
    color: '#00adff'
},
activeBackgroundColor: {
    backgroundColor: 'grey'
}
  
});
 

const DrawerNavigatorExample = createDrawerNavigator({
  
  Screen1: {
    
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Account Settings',
      
    },
  },
  Screen2: {
    
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Notification Settings',
    },
  },
  Screen3: {
   
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Privacy Settings',
    },
  },




});
 

export default createAppContainer(DrawerNavigatorExample);