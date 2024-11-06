import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PrimeChecker = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export default function App() {
  const [number, setNumber] = useState('');
  const [isPrime, setIsPrime] = useState(null);

  const handleCheckPrime = () => {
    const num = parseInt(number);
    setIsPrime(PrimeChecker(num));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Número Primo</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
        placeholder="Digite um número"
      />
      <Button title="Verificar" onPress={handleCheckPrime} />
      {isPrime !== null && (
        <Text style={styles.result}>
          {number} {isPrime ? 'é primo' : 'não é primo'}.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
