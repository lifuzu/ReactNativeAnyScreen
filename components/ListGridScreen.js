'use strict';

var React = require('react-native');

var {
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var ListGridScreen = React.createClass({
  statics: {
    key: 'ListGrid',
    title: 'ListGrid Screen',
    description: 'Screen for list grid demo'
  },
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var data = Array.apply(null, {length: 100}).map(Number.call, Number);
    return {
      dataSource: ds.cloneWithRows(data),
    };
  },
  render: function() {
    return (
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <View style={styles.block}><Text style={styles.item}>{rowData}</Text></View>}
      />
    );
  }
});

var styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  block: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    margin: 4,
    // width: width / 2 - 4 * 2-2,
    width: width - 4 * 2,
  },
  item: {
    backgroundColor: 'blue',
  }
});

module.exports = ListGridScreen;