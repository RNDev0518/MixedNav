/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  DrawerItems,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Login, Pricing, Resume, Meditate, Page1, Page2, Page3 } from '@pages';

const MyBottomTabs = createMaterialTopTabNavigator({
  Page1: {
    screen: Page1
  },
  Page2: {
    screen: Page2
  },
  Page3: {
    screen: Page3
  }
}, {tabBarPosition : 'bottom', tabBarOptions: {scrollEnabled : true}});

const MyTabs = createMaterialTopTabNavigator({
  Menu: {
    screen: () => null,
    navigationOptions: (options) => ({
			tabBarOnPress: () => {
        options.navigation.toggleDrawer()
      }
		})
  },
  Resume: {
    screen: Resume, navigationOptions : {
      title: "Resume",
      tabBarIcon: ({ tintColor }) => (
          <Icon
              name="rocket"
              size={30}
              color={tintColor} />
      )
    }
  },
  Progress: {
    screen: MyBottomTabs, navigationOptions : {
      title: "Progress",
      tabBarIcon: ({ tintColor }) => (
          <Icon
              name="rocket"
              size={30}
              color={tintColor} />
      )
    }
  },
  Meditate: {
    screen: Meditate
  }
}, {initialRouteName: 'Resume', swipeEnabled: false, animationEnabled : false});

const MyMenu = createDrawerNavigator({
  Sensorium: { screen: MyTabs, navigationOptions : {
    drawerLabel: 'Meditate in Sensorium',
    // drawerIcon: ({ tintColor }) => (
    //   <View style={{backgroundColor: 'skyblue'}}></View>
    // ),
  }},
  Pricing  : { screen: Pricing},
  Login    : { screen: Login, navigationOptions : {
    // drawerIcon: ({ tintColor }) => (
    //   <View style={{backgroundColor: 'skyblue'}}></View>
    // ),
  }},
  Guide    : { screen: Pricing, navigationOptions : {
    drawerLabel: 'How it works',
  }},
  Blog     : { screen: Login, navigationOptions : {
    drawerLabel: 'Blog',
  }},
  Contact  : { screen: Pricing, navigationOptions : {
    drawerLabel: 'Contact',
  }},
  About    : { screen: Login, navigationOptions : {
    drawerLabel: 'About us',
  }},
  FAQ      : { screen: Pricing, navigationOptions : {
    drawerLabel: 'FAQ',
  }},
  Policy   : { screen: Login, navigationOptions : {
    drawerLabel: 'Privacy Policy',
  }},
  TC       : { screen: Pricing, navigationOptions : {
    drawerLabel: 'T&C',
  }},
  Disclaimer: { screen: Pricing, navigationOptions : {
    drawerLabel: 'Disclaimer',
  }},
}, {
  contentComponent: (props) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Create Free Account</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <DrawerItems {...props}/>
      </ScrollView>
      <View style={styles.footer}/>
    </View>
  )
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#2196f3'}}>
        <MyMenu/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201f1e',
  },
  header: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  btn: {
    width: '80%',
    height: '35%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25b898',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  footer: {
    width: '100%',
    height: '10%',
  }
});