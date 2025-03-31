import { View, FlatList, StyleSheet } from "react-native";
import { Appbar, FAB, List } from "react-native-paper";

const contatos = [
  { id: 1, nome: "Mãe", fone: "61 99999-9999" },
  { id: 2, nome: "Bae", fone: "61 98888-8488" },
  { id: 3, nome: "Bell", fone: "61 9777-9777" },
  { id: 4, nome: "Pai", fone: "61 9777-7877" },
  { id: 5, nome: "Clubinho", fone: "61 9777-5577" },
];

function ContactScreen() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Contatos" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <FlatList
          data={contatos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Item
              left={(props) => <List.Icon {...props} icon="account" />}
              title={item.nome}
              description={item.fone}
            />
          )}
        />
        <View style={styles.fab}>
          <FAB icon="plus" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
      },
      fab: {
          flexDirection: "row",
          position: 'absolute',
          right: 16,
          bottom: 16
      }
  });
  
  export default ContactScreen;  