import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';

const postRedux = state => state.PostReducer.post;
createSelector([postRedux], items => console.log(items, 'items'));

let counter = 0;
const SettingScreen = () => {
  const dispatch = useDispatch();
  const postList = useSelector(postRedux, shallowEqual);

  const updateMethod = id => {
    dispatch({type: 'UPDATE_POST', payload: 499});
  };

  return (
    <ScrollView>
      {postList?.map(item => {
        return (
          <View key={item.id} style={styles.itemView}>
            <Text style={styles.nameStyle}>{item.id}</Text>
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text style={styles.nameStyle}>{item.title}</Text>
          </View>
        );
      })}
      <TouchableOpacity onPress={updateMethod}>
        <Text>update post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  itemView: {
    borderWidth: 1,
    marginVertical: 5,
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
