import UseJwtAuth from '@src/features/auth/useJwtAuth';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsProcessing, setIsProcessing } from './homeSlice';
import style from '@src/theme/style';
// import styles from '@theme/style'
const HomeScreen = () => {
  const { signOut } = UseJwtAuth();
  const isProcessing = useSelector(selectIsProcessing);
  console.log("Home: ", isProcessing);
  return (
    <View style={style.inner}>
      <Text>Hello</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
};

export default HomeScreen;
