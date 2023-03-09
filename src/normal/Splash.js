import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {THEAM_COLOR} from '../common/Colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 3000);
  }, []);
  return (
    <View style={styles.constainer}>
      <Text>My Billing App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEAM_COLOR,
  },
});
