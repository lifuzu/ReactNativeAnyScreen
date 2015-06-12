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
      <ScrollView>
        <ListView contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
        />
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    borderWidth: 1,
    backgroundColor: 'red',
    margin: 3,
    // padding: 5,
    height: 50,
    width: width / 3 - 3 * 2
  }
});

module.exports = ListGridScreen;