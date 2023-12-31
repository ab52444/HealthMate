import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import EvilIcon from "react-native-vector-icons/Feather";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const DiseasePredictionScreen = () => {
  const [symptoms, setSymptoms] = useState({});
  const [predictionResult, setPredictionResult] = useState('');

  const handlePredict = () => {
    // Implement your prediction logic here based on user input (symptoms)
    // For simplicity, let's assume a basic logic for illustration purposes

    // Example: Predefined symptoms and conditions
    const predefinedSymptoms = {
      fever: false,
      cough: false,
      headache: false,
      soreThroat: false,
    };

    // Check if any of the predefined symptoms are present in the user input
    const matchedSymptoms = Object.keys(symptoms).filter((symptom) => symptoms[symptom]);

    // Determine the prediction result based on the matched symptoms
    const isPositivePrediction = matchedSymptoms.length >= 2;

    // Set the prediction result
    setPredictionResult(isPositivePrediction ? 'Positive' : 'Negative');
  };

  return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/images/background.png')} >
    <View style={styles.container}>
      
      <Text style={styles.title}>Disease Prediction</Text>

      

      <ScrollView style={styles.inputContainer} showsVerticalScrollIndicator={false}>
        {/* Input Fields for Symptoms */}
        <TextInput
          style={styles.input}
          placeholder="Temprature"
          onChangeText={(text) => setSymptoms({ ...symptoms, fever: text })}
          value={symptoms.fever}
        />

        <TextInput
          style={styles.input}
          placeholder="Cough"
          onChangeText={(text) => setSymptoms({ ...symptoms, cough: text })}
          value={symptoms.cough}
        />

        <TextInput
          style={styles.input}
          placeholder="Headache"
          onChangeText={(text) => setSymptoms({ ...symptoms, headache: text })}
          value={symptoms.headache}
        />

        <TextInput
          style={styles.input}
          placeholder="Sore Throat"
          onChangeText={(text) => setSymptoms({ ...symptoms, soreThroat: text })}
          value={symptoms.soreThroat}
        />
      </ScrollView>

      <TouchableOpacity style={styles.predictButton} onPress={handlePredict}>
        <Text style={styles.buttonText}>Predict</Text>
      </TouchableOpacity>

      {predictionResult !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Fever</Text>
          <Text style={styles.result}>{predictionResult}</Text>
        </View>
      )}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f0f0f0',
    marginTop:hp(2)
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  predictButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  result: {
    fontSize: 28,
    marginTop: 10,
    color: '#27ae60',
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: hp(2),
    borderWidth: 2,
    backgroundColor: "#ECF2F3",
  },
});

export default DiseasePredictionScreen;
