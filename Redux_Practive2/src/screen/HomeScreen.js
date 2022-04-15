import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {IncAction, decAction, postPushAction} from '../Redux/action';
import {createSelector} from 'reselect';

const selectNumCompletedTodos = state => state.IncReducer;

const HomeScreen = () => {
  // bring our incReducer all state
  const {count} = useSelector(selectNumCompletedTodos, shallowEqual);

  const incMethod = () => {
    IncAction(1);
  };
  const decMethod = () => {
    decAction(1);
  };

  return (
    <View>
      <TouchableOpacity onPress={incMethod}>
        <Text>+</Text>
      </TouchableOpacity>
      <Text>HomeScreen - {count}</Text>
      <TouchableOpacity onPress={decMethod}>
        <Text>-</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={postPushAction}>
        <Text>push post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
