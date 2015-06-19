'use strict';
var React = require('react-native');
var { Text, StyleSheet } = React;

var GeoScreen = React.createClass({
  
  statics: {
    key: 'GeoInfo',
    title: 'GeoInfo',
    description: 'GeoInfo screen',
  },

  watchID: (null: ?number),

  getInitialState: function() {
    return { position: 'unknown' };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({position}),
      (error) => console.error(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      this.setState({lastPosition});
    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render: function() {
    return (
      <Text style={styles.title}>
        Position: {JSON.stringify(this.state.position)}
      </Text>
    );
  },
});

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});

module.exports = GeoScreen;