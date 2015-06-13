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

var AnyScreen = React.createClass({
  render: function() {
    var screenElement;
    screenElement = (<ScreenNavigator title='Full' component={FullScreen} key='Full' />);
    screenElement = (<ScreenNavigator title='RightNavBtn'
                                      component={FullScreen}
                                      key='RightNavBtn'
                                      rightButtonTitle='Right'
                                      onRightButtonPress={
                                        ()=>{AlertIOS.alert("hello")}
                                      } />);
    screenElement = (<FullScreen/>);
    screenElement = (<ScreenNavigator title='ListGrid' component={ListGridScreen} key='ListGrid' />);
    return (
      <View style={styles.app}>
        {screenElement}
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
