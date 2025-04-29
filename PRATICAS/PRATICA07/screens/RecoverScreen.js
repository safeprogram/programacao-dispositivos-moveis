import { TextInput, Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

function RecoverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput label="E-mail" style={styles.input} />
      <Button mode="contained" style={styles.button} onPress={() => {}}>
        Recuperar Senha
      </Button>
      <Text style={styles.backText} onPress={() => navigation.goBack()}>
        Voltar para o Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginBottom: 12,
  },
  backText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default RecoverScreen;