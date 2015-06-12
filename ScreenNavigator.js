'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  StyleSheet
} = React;

var globalVariables = require('./globalVariables.js');

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var ScreenNavigator = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      component: null
    };
  },
  render: function() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        tintColor={globalVariables.green}
        initialRoute={this.props}
      />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    width: width, 
    height: height
  },
});

module.exports = ScreenNavigator;
