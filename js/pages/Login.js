/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    drawerLabel: 'Login',
    // drawerIcon: ({ tintColor }) => (
    //   <View style={{backgroundColor: 'skyblue'}}></View>
    // ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => {this.props.navigation.toggleDrawer()}}>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    opacity: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37a000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
