import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

const UserForm = ({onSubmit, resetForm, setResetForm}) => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [exerciseLevel, setExerciseLevel] = useState('');
  const [diet, setDiet] = useState('');
  const [smoking, setSmoking] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [geneticDisorders, setGeneticDisorders] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [cholesterolLevel, setCholesterolLevel] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    if (resetForm) {
      // Reset form fields
      setName('');
      setDateOfBirth(new Date());
      setExerciseLevel('');
      setDiet('');
      setSmoking(false);
      setAlcohol(false);
      setGeneticDisorders('');
      setFamilyHistory('');
      setBloodPressure('');
      setCholesterolLevel('');
      setWeight('');
      setHeight('');
      setResetForm(false); // Reset the flag
    }
  }, [resetForm, setResetForm]);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Date of Birth:</Text>
      <View>
        <Button onPress={() => setShowDatePicker(true)} title="Select Date" />
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>

      <Text style={styles.label}>Exercise Level:</Text>
      <Picker
        selectedValue={exerciseLevel}
        style={styles.picker}
        onValueChange={itemValue => setExerciseLevel(itemValue)}>
        <Picker.Item label="None" value="none" />
        <Picker.Item label="Low" value="low" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="High" value="high" />
      </Picker>

      <Text style={styles.label}>Diet:</Text>
      <Picker
        selectedValue={diet}
        style={styles.picker}
        onValueChange={itemValue => setDiet(itemValue)}>
        <Picker.Item label="Poor" value="poor" />
        <Picker.Item label="Average" value="average" />
        <Picker.Item label="Good" value="good" />
      </Picker>

      <Text style={styles.label}>Smoking:</Text>
      <Switch value={smoking} onValueChange={setSmoking} />

      <Text style={styles.label}>Alcohol:</Text>
      <Switch value={alcohol} onValueChange={setAlcohol} />

      <Text style={styles.label}>Genetic Disorders:</Text>
      <TextInput
        value={geneticDisorders}
        onChangeText={setGeneticDisorders}
        style={styles.input}
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Family History:</Text>
      <TextInput
        value={familyHistory}
        onChangeText={setFamilyHistory}
        style={styles.input}
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Blood Pressure:</Text>
      <Picker
        selectedValue={bloodPressure}
        style={styles.picker}
        onValueChange={itemValue => setBloodPressure(itemValue)}>
        <Picker.Item label="Low" value="low" />
        <Picker.Item label="Normal" value="normal" />
        <Picker.Item label="High" value="high" />
      </Picker>

      <Text style={styles.label}>Cholesterol Level:</Text>
      <Picker
        selectedValue={cholesterolLevel}
        style={styles.picker}
        onValueChange={itemValue => setCholesterolLevel(itemValue)}>
        <Picker.Item label="Low" value="low" />
        <Picker.Item label="Normal" value="normal" />
        <Picker.Item label="High" value="high" />
      </Picker>

      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        style={styles.input}
        placeholderTextColor="#ccc"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Height (cm):</Text>
      <TextInput
        value={height}
        onChangeText={setHeight}
        style={styles.input}
        placeholderTextColor="#ccc"
        keyboardType="numeric"
      />

      <Button
        title="Submit"
        onPress={() =>
          onSubmit({
            name,
            dateOfBirth: dateOfBirth.toISOString().split('T')[0], // Format date as YYYY-MM-DD
            lifestyle: {exerciseLevel, diet, smoking, alcohol},
            genetics: {geneticDisorders, familyHistory},
            healthCheck: {bloodPressure, cholesterolLevel, weight, height},
          })
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    color: '#fff',
  },
  datePicker: {
    width: '100%',
    marginBottom: 10,
  },
  dateInput: {
    borderColor: 'gray',
    alignItems: 'flex-start',
    paddingLeft: 8,
    height: 40,
  },
  dateText: {
    color: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#fff',
    backgroundColor: 'black',
    marginBottom: 10,
  },
});

export default UserForm;
