var React = require('react-native');
var Animation = require('AnimationExperimental');

var {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text,
} = React;

var Routes = require('../Routes');

var AnimationScreen = React.createClass({
  statics: {
    key: 'Animation',
    title: 'Animation Screen',
    description: 'Screen for animation screen demo'
  },
  // //this.refs['this'], 400, 0, 'linear', {opacity: 1}
  componentDidMount: function () {
    Animation.startAnimation({ //this.refs['this'], 300, 0, 'easeInOutQuad', {scaleXY: [5, 5]});
      node: this.refs['this'],
      duration: 300,
      easing: 'easeInQuad',
      // property: 'opacity',
      // toValue: 0.1,
      property: 'scaleXY',
      toValue: [5, 5],
    });
  },
  _onPress: function() {
    console.log('starting animation');
    Animation.startAnimation({//this.refs['this'], 300, 0, 'easeInOutQuad', {scaleXY: [2.5, 2.5]});
      node: this.refs['this'],
      duration: 300,
      easing: 'easeInQuad',
      // property: 'opacity',
      // toValue: 1,
      property: 'scaleXY',
      toValue: [2.5, 2.5],
    });
  },
  render: function() {
    return (
      <TouchableHighlight style={styles.container} onPress={this._onPress}>
        <View>
          <Text style={styles.text}>
            Click here to start animation!
          </Text>
          <View ref='this' style={styles.box}/>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    top: 200,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
  },
  box:{
    backgroundColor:'red', 
    width: 50, 
    height: 50,
  }
});

module.exports = AnimationScreen;