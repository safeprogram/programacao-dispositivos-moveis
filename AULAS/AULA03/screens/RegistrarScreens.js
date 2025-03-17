import { View, Text, TextInput, StyleSheet} from "react-native";

function RegistrarScreen(){
    return (<View>
        <View>
            <Text>Criar Conta</Text>
        </View>
        <View>
            <Text>Nome</Text>
            <TextInput keyboardType="default"/>
            <Text>Email</Text>
            <TextInput/>
            <Text>Senha</Text>
            <TextInput/>
        </View>
    </View>
    );
  };

export default RegistrarScreen;