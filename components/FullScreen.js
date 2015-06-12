'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Image
} = React;

var FullScreen = React.createClass({
  statics: {
    key: 'full',
    title: 'Full Screen',
    description: 'Screen for full screen demo'
  },
  render: function() {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: 'http://lorempixel.com/200/400/sports/5'}} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
});

module.exports = FullScreen;