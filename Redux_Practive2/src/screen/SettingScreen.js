import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

let counter = 0;
const SettingScreen = () => {
  const {count, post} = useSelector(state => state.IncReducer);
  console.log('from setting screen');

  return (
    <View>
      <Text>SettingScreenpost[0].title</Text>
      <Text>{counter++}</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
