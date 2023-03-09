import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';
import {THEAM_COLOR} from '../common/Colors';
import {useNavigation} from '@react-navigation/native';
const Parent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.homedata}>No Data Found</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('AddNewBill');
        }}>
        <Text style={styles.buttontext}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('AddNewBill');
        }}>
        <Text style={styles.buttontext}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('AddNewBill');
        }}>
        <Text style={styles.buttontext}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  homedata: {
    color: '#000',
    fontSize: 30,
  },
  addButton: {
    backgroundColor: THEAM_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },
  buttontext: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '900',
  },
});
