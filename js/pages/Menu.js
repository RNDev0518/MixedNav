import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity} from 'react-native';

class Menu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Create Free Account</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Sensorium')}>
              Meditate in Sensorium
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Pricing')}>
              Pricing
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Login')}>
              Login
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}/>
      </View>
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
  navSectionStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  navItemStyle: {
    fontSize: 12,
    color: '#fff',
  },
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#444'
  }
});

Menu.propTypes = {
  navigation: PropTypes.object
};

export default Menu;