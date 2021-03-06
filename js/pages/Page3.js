/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Page3 extends Component {
  static navigationOptions = {
    title: "Page3",
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
        <Text>Page3</Text>
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
