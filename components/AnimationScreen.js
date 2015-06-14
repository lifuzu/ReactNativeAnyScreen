var React = require('react-native');
var Animation = require('AnimationExperimental');

var {
  StyleSheet,
  View,
  Image,
  Text,
} = React;

var PanButton = require('./PanButton');
var Routes = require('../Routes');

var AnimationScreen = React.createClass({
  statics: {
    key: 'Animation',
    title: 'Animation Screen',
    description: 'Screen for animation screen demo'
  },
  // //this.refs['this'], 400, 0, 'linear', {opacity: 1}
  componentDidMount () {
    Animation.startAnimation(this.refs['this'], 400, 0, 'linear', {opacity: 1});
    //   node: this.refs['this'],
    //   duration: 400,
    //   easing: 'easeInQuad',
    //   property: 'opacity',
    //   toValue: 0.1,
    // );
  },
  render: function() {
    return (
      <View ref='this' style={styles.block}>
        <Text>Just an animation testJust an animation testJust an animation testJust an animation testJust an animation testJust an animation test</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  block: {
    width: 400,
    height: 400,
    backgroundColor: 'blue',
    opacity: 0
  }
});

module.exports = AnimationScreen;