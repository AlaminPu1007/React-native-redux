import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, shallowEqual, connect} from 'react-redux';

let counter = 0;

const SettingScreen = ({count, post}) => {
  if (__DEV__) {
    console.log(count, post.length, 'from setting screen');
  }

  return (
    <View>
      <Text>counter-:{count}</Text>
      <Text>counter = {counter++}</Text>
      {post?.map(item => {
        return (
          <View key={item.title + Math.random() * 7987778}>
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

function mapStateToProps(state) {
  return state.IncReducer;
}

export default connect(mapStateToProps)(SettingScreen);

const styles = StyleSheet.create({});
