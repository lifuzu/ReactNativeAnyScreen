
class Routes {
  
  static register(name, handler) {
    if (this.handlers == null) this.handlers = {}
    this.handlers[name] = handler
  }
  static get(name, params) {
    if (this.handlers[name] == null) throw new Error('unknown route')
    return this.handlers[name](params)
  }
  static FullScreen() {
    var fullScreen = require('./components/FullScreen');
    return {
      key: 'Full',
      component: fullScreen,
      title: fullScreen.title
    }
  }
  static ListGridScreen() {
    var listGridScreen = require('./components/ListGridScreen');
    return {
      key: 'ListGrid',
      component: listGridScreen,
      title: listGridScreen.title
    }
  }
      // component: searchScreen,
      // title: searchScreen.title
      //rightButtonTitle: 'Done',
      //onRightButtonPress: () => {
      //  searchScreen.onRightButtonPress();
        // AlertIOS.alert(
        //   'Bar Button Action',
        //   JSON.stringify(searchScreen.state),
        //   [
        //     {
        //       text: 'OK',
        //       onPress: () => console.log('Tapped OK'),
        //     },
        //   ]
        // );
      //},
  static QueryResultScreen(search) {
    var queryResultScreen = require('./components/QueryResultScreen');
    return {
      key: 'result',
      component: queryResultScreen,
      title: queryResultScreen.title,
      passProps: {search: search},
    }
  }
  static Comments(story) {
    if (story == null) throw new Error('missing argument: story')

    var route = {
      component: require('./components/CommentsScreen'),
      title: 'Comments',
    }

    // TODO: get title from store?
    if (story.title) route.title = `Comments – ${story.title}`

    route.passProps = {storyId: story.id}

    return route;
  }
}

module.exports = Routes
