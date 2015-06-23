
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DateBetween = function(startDate, endDate) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;
  
  if (distance < 0) {
    return "count down date expired";
  }

  var days = Math.floor(distance / day);
  var hours = Math.floor((distance % day) / hour);
  var minutes = Math.floor((distance % hour) / minute);
  var seconds = Math.floor((distance % minute) / second);

  var between = days + ' days, ';
  between += hours + ' hours ';
  between += minutes + ' minutes ';
  between += seconds + ' seconds';

  return between;
}

var CountDown = React.createClass({

  statics: {
    key: 'CountDown',
    title: 'CountDown',
    description: 'CountDown screen',
  },

  getInitialState: function(){
    var OPTIONS = { endDate: '07/03/2015 10:12 AM', prefix: 'until my birthday!' }
     return {
       // endDate: this.props.options.endDate,
       // prefix: this.props.options.prefix,
       endDate: OPTIONS.endDate,
       prefix: '',
     }
  },
  /** 
   * Tick the counter down.
  **/
  tick: function() {
    var startDate = new Date();
    var endDate = new Date(this.state.endDate);
    var remaining = DateBetween(startDate, endDate);
    this.setState({remaining: remaining });
  },
  componentDidMount: function() {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },  
  render: function(){
    return (
      <View style={styles.container}>
        <Text>{this.state.remaining} {this.state.prefix}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

module.exports = CountDown;