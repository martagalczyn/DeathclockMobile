import React from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import {getUser} from '../utils/api';

const UserProfileScreen = ({route, navigation}) => {
  const {user} = route.params;
  const [prediction, setPrediction] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(user._id);
        setPrediction(userData.prediction);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [user]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>User Profile</Text>
          <Text style={styles.info}>Name: {user.name}</Text>
          <Text style={styles.info}>Date of Birth: {user.dateOfBirth}</Text>
          {prediction && (
            <>
              <Text style={styles.prediction}>
                Predicted Age: {prediction.predictedAge}
              </Text>
              <Text style={styles.prediction}>
                Cause of Death: {prediction.causeOfDeath}
              </Text>
            </>
          )}
          <Button
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
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
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  prediction: {
    fontSize: 18,
    color: '#d9534f',
    marginBottom: 10,
  },
});

export default UserProfileScreen;
