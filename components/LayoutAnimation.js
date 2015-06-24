'use strict';

var React = require('react-native');
var {
  StyleSheet,
  LayoutAnimation,
  Text,
  TouchableHighlight,
  View,
} = React;

var LayoutAnimationScreen = React.createClass({

  getInitialState: function() {
    return {boxOpen:false}
  },
  componentDidMount: function() {
    console.log('mounted');
    setTimeout(() => {
      LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
      this.setState({boxOpen:!this.state.boxOpen})
    }, 0);
  },
  _onPress: function() {
    console.log('starting animation');
    LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
    this.setState({boxOpen:!this.state.boxOpen})
  },

  render: function() {
    var box =  this.state.boxOpen === true ? 
    <View ref='this' style={styles.boxOpen}/> :
    <View ref='this' style={styles.boxClosed}/>

    return (

      <TouchableHighlight style={styles.container} onPress={this._onPress}>
        <View>
          <Text style={styles.text}>
            Click here to start animation!
          </Text>
         {box}
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
    top:200,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
  },
  boxClosed:{
    backgroundColor:'red', 

    width: 50, 
    height: 50,
    margin: 5,
  },
  boxOpen:{
    backgroundColor:'red', 
    width: 550, 
    height: 550,
  }
});


var animations = {
  layout: {
    spring: {
      duration: 750,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.4,
      },
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        delay: 100,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

module.exports = LayoutAnimationScreen;