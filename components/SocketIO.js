'use strict';
var React = require('react-native');
window.navigator.userAgent = "react-native";
var io = require('socket.io-client/socket.io');
var base64 = require('base-64');

var {
  StyleSheet,
  View,
  Image,
  Text,
} = React;

var SocketIO = React.createClass({
  
  statics: {
    key: 'SocketIO',
    title: 'SocketIO',
    description: 'SocketIO screen',
  },

  getInitialState: function() {
    return {
      base64ImageString: '/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDB…AREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//Z',
      text: 'Hello',
    };//http://lorempixel.com/200/400/sports/5
  },

  componentDidMount: function() {
    console.log("componentDidMount");
    this.socket = io('http://localhost:3000/', { jsonp: false });
    this.socket.on('text', (data) => {
      // this.state.messages.push(msg);
      console.log(data.text);
      this.setState({text: data.text});
      // var uint8Arr = new Uint8Array(data.buffer);
      // var binary = '';
      // for (var i = 0; i < uint8Arr.length; i++) {
      //   binary += String.fromCharCode(uint8Arr[i]);
      // }
      // var base64String = base64.encode(binary);

      // this.setState({base64ImageString: base64String});
      
      this.forceUpdate();
    });
  },
  // <Image source={{uri: 'data:image/jpeg;base64,'+ this.state.base64ImageString, isStatic: true}} />
  // <Image style={styles.image} source={{uri: 'data:image/png;base64,'+ this.state.base64ImageString, isStatic: true}} />
  render: function() {
    
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        
      </View>
    );
  },
});

    // } else {
    //   return (
    //     <View style={styles.imageContainer}>
    //       <Image style={styles.image} source={{uri: 'http://lorempixel.com/200/400/sports/5'}} />
    //     </View>
    //   );

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
});

module.exports = SocketIO;