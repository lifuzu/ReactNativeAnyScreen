// https://github.com/facebook/react-native/issues/619
var { Map, List } = require('immutable');
  getInitialState: function() {
    return {
      data: Map({ input: '', messages: List() })
    }
  },
  componentDidMount: function() {
    this.socket = io('http://localhost:5000', { jsonp:false });
    this.socket.on('chat message', (msg) => {
      // this.state.messages.push(msg);
      this.setState(prev => ({
        data: prev.data.update('messages', list => list.push(msg))
      }))
      this.forceUpdate();
    });
  },
  render: function() {
    return (
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={200}
          bounces={false}
          contentInset={{top: 0}}
          >
          {this.state.data.get('messages').map(m => {
            return <Text style={styles.message}>Josh: {m}</Text>
          })}
        </ScrollView>
    );