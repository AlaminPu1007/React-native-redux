import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IncAction, decAction, postPushAction} from '../Redux/action';

const HomeScreen = () => {
  const dispatch = useDispatch();
  // bring our incReducer all state
  const {count, post} = useSelector(state => state.IncReducer);
  console.log(post);

  return (
    <View>
      <TouchableOpacity onPress={() => IncAction(1)}>
        <Text>+</Text>
      </TouchableOpacity>
      <Text>HomeScreen - {count}</Text>
      <TouchableOpacity onPress={() => decAction(1)}>
        <Text>-</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          postPushAction(100);
        }}>
        <Text>push post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
