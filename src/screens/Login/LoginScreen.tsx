import { selectIsProcessing, setIsProcessing } from '@screens/Home/homeSlice';
import UseJwtAuth from '@src/features/auth/useJwtAuth';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-get-random-values';
import { useDispatch, useSelector } from 'react-redux';

export const LoginScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { signIn } = UseJwtAuth();
  const isProcessing = useSelector(selectIsProcessing)
  console.log(isProcessing);
  
  const [email, setEmail] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const handleLogin = () => {
    if (!email || !password) return Alert.alert('Email và password không để trống.');

    const data = {
      username: email,
      password,
      // uuid: uuidv4(),
      // time_zone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    // Kiểm tra xem signIn có tồn tại không
    if (!signIn) {
      return Alert.alert('SignIn function is not available.');
    }

    signIn(data)
      .catch((error) => {
        console.error('Login failed:', error);
        Alert.alert('Login failed', 'Please check your credentials and try again.');
      });
  };

  const navigateToSignup = () => navigation.navigate('Signup');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email..."
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
      />
      <TextInput
        style={styles.input}
        placeholder="Password..."
        onChangeText={setPassword}
        value={password}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        dispatch(setIsProcessing(true))
      }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Don&apos;t have an account?</Text>
      <TouchableOpacity onPress={navigateToSignup} disabled={false}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 20,
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderRadius: 15,
    borderWidth: 1,
    fontSize: 18,
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  link: {
    color: 'blue',
    fontSize: 16,
    marginTop: 12,
  },
  signupText: {
    fontSize: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
