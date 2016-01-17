/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var BiggerLife = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>逼格BiggerLife生活</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>超越自我的目标管理</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>方便实用</Text>
        </View>
      </Swiper>
    )
  }
});

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

AppRegistry.registerComponent('BiggerLife', () => BiggerLife);
