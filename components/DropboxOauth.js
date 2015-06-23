'use strict';

var React = require('react-native');
var shittyQs = require('shitty-qs');
var globalVariables = require('../globalVariables.js');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  LinkingIOS,
} = React;

var DropboxOauth = React.createClass({
  dropboxOauth: function(app_key, callback){
    var state = Math.random() + '';
    LinkingIOS.addEventListener('url', handleUrl);
    function handleUrl(event) {
      var [, query_string] = event.url.match(/\#(.*)/)
      var query = shittyQs(query_string)
      if (state === query.state) {
        callback(null, query.access_token, query.uid)
      } else {
        callback(new Error('Oauth2 Security Error!'))
      }
      LinkingIOS.removeEventListener('url', handleUrl)
    }
    LinkingIOS.openURL([
      'https://www.dropbox.com/1/oauth2/authorize',
      '?response_type=token',
      '&client_id=' + app_key,
      '&redirect_uri=oauth2example://foo',
      `&state=${state}`
    ].join(''))
  },
  componentDidMount: function() {
    this.dropboxOauth(globalVariables.dropboxAppKey, (err, access_token) => {
      if (err) { console.log(err) }
        this.setState({access_token: access_token})
    })
  },
  // onPress={this.props.onPress(this.state)}>
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          
          <Text>Make Folder</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = DropboxOauth;