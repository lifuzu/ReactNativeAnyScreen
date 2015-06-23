/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AlertIOS,
  AppRegistry,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var ScreenNavigator = require('./ScreenNavigator');
var FullScreen = require('./components/FullScreen');
var ListGridScreen = require('./components/ListGridScreen');
var GridLayoutScreen = require('./components/GridLayoutScreen');
var AnimationScreen = require('./components/AnimationScreen');
var DragCardScreen = require('./components/DragCardScreen');
var Game2048Screen = require('./components/Game2048');
var GeoInfoScreen = require('./components/GeoScreen');
var SocketIOScreen = require('./components/SocketIO');
var DropboxOauthScreen = require('./components/DropboxOauth');
var CountDownScreen = require('./components/CountDownScreen');

var AnyScreen = React.createClass({
  render: function() {
    var RightNavBtnElement = (<ScreenNavigator title='RightNavBtn'
                                component={FullScreen}
                                key='RightNavBtn'
                                rightButtonTitle='Right'
                                onRightButtonPress={
                                  ()=>{AlertIOS.alert("hello")}
                                } />);
    var FullScreenElement = (<FullScreen/>);
    var FullWithNavElement = (<ScreenNavigator title='Full'
                                component={FullScreen}
                                key='Full' />);
    var ListGridElement = (<ScreenNavigator title='ListGrid'
                             component={ListGridScreen}
                             key='ListGrid' />);
    var GridLayoutElement = (<ScreenNavigator title='GridLayout'
                             component={GridLayoutScreen}
                             key='GridLayout' />);
    var AnimationElement = (<ScreenNavigator title='Animation' component={AnimationScreen} key='Animation' />);
    var DragCardElement = (<ScreenNavigator title='DragCard' component={DragCardScreen} key='DragCard' />);
    var Game2048Element = (<ScreenNavigator title='Game2048' component={Game2048Screen} key='Game2048' />);
    var GeoInfoElement = (<ScreenNavigator title='GeoInfo' component={GeoInfoScreen} key='GeoInfo' />);
    var SocketIOElement = (<ScreenNavigator title='SocketIO' component={SocketIOScreen} key='SocketIO' />);
    var DropboxOauthElement = (<ScreenNavigator title='DropboxOauth' component={DropboxOauthScreen} key='DropboxOauth' />);
    var CountDownElement = (<ScreenNavigator title='CountDown' component={CountDownScreen} key='CountDown' />);
    return (
      <View style={styles.app}>
        {CountDownElement}
      </View>
    );

    // Ref: http://stackoverflow.com/questions/29361753/how-to-add-right-button-in-navigatorios-in-tabs-for-react-native
    // <NavigatorIOS
    //   ref="nav"
    //   style={styles.natigator}
    //   initialRoute={{
    //     component: Invites,
    //     title: Invites.title,
    //     rightButtonTitle: 'New Invite',
    //     onRightButtonPress: () => {
    //       this.refs.nav.navigator.push({
    //         title: "test",
    //         component: EmptyPage,
    //         rightButtonTitle: 'Cancel',
    //         onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
    //       });}
    //   }}
    // />
  },
});

var styles = StyleSheet.create({
  app: { width, height },
});

AppRegistry.registerComponent('AnyScreen', () => AnyScreen);
