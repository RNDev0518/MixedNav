/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Page2 extends Component {
  static navigationOptions = {
    title: "Page2",
    // tabBarIcon: ({ tintColor }) => (
    //     <Icon
    //         name="microchip"
    //         size={17}
    //         color={tintColor} />
    // )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Page2</Text>
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
