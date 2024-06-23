import React, {useCallback, useState} from 'react';
import {View, StyleSheet, ImageBackground, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import UserForm from '../components/UserForm';
import {addUser} from '../utils/api';

const HomeScreen = ({navigation}) => {
  const [resetForm, setResetForm] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setResetForm(true);
    }, []),
  );

  const handleSubmit = async user => {
    try {
      const newUser = await addUser(user);
      navigation.navigate('UserProfile', {user: newUser});
    } catch (error) {
      console.error('Error adding user:', error);
      Alert.alert('Error', 'Failed to add user');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}>
        <UserForm
          onSubmit={handleSubmit}
          resetForm={resetForm}
          setResetForm={setResetForm}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
