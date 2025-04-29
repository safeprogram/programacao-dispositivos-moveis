import { TextInput, Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput label="E-mail" style={styles.input} />
      <TextInput label="Senha" secureTextEntry style={styles.input} />
      <Button mode="contained" style={styles.button} onPress={() => {}}>
        Entrar
      </Button>
      <Text style={styles.recoverText} onPress={() => navigation.navigate('RecuperarSenha')}>
        Esqueceu sua senha? Recuperar senha
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
  recoverText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;