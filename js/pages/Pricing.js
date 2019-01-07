/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Pricing extends Component {
  static navigationOptions = {
    drawerLabel: 'Pricing',
    // drawerIcon: ({ tintColor }) => (
    //   <View style={{backgroundColor: 'skyblue'}}></View>
    // ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => {this.props.navigation.toggleDrawer()}}>Pricing</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
