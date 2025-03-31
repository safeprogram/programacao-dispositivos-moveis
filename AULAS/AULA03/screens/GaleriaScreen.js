import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

function GaleriaScreen() {
  const imagens = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6",
    "https://picsum.photos/200?random=7",
    "https://picsum.photos/200?random=8",
    "https://picsum.photos/200?random=9",
    "https://picsum.photos/200?random=10",
    "https://picsum.photos/200?random=11",
    "https://picsum.photos/200?random=12",
    "https://picsum.photos/200?random=13",
    "https://picsum.photos/200?random=14",
    "https://picsum.photos/200?random=15",
    "https://picsum.photos/200?random=16",
    "https://picsum.photos/200?random=17",
    "https://picsum.photos/200?random=18",
    "https://picsum.photos/200?random=19",
    "https://picsum.photos/200?random=34",
    "https://picsum.photos/200?random=35",
    "https://picsum.photos/200?random=36",
    "https://picsum.photos/200?random=37",
    "https://picsum.photos/200?random=38",
    "https://picsum.photos/200?random=39",
    "https://picsum.photos/200?random=40",
    "https://picsum.photos/200?random=20",
    "https://picsum.photos/200?random=21",
    "https://picsum.photos/200?random=22",
    "https://picsum.photos/200?random=23",
    "https://picsum.photos/200?random=24",
    "https://picsum.photos/200?random=25",
    "https://picsum.photos/200?random=26",
    "https://picsum.photos/200?random=27",
    "https://picsum.photos/200?random=28",
    "https://picsum.photos/200?random=29",
    "https://picsum.photos/200?random=30",
    "https://picsum.photos/200?random=31",
    "https://picsum.photos/200?random=32",
    "https://picsum.photos/200?random=33",
    "https://picsum.photos/200?random=41",
    "https://picsum.photos/200?random=42",
    "https://picsum.photos/200?random=43",
    "https://picsum.photos/200?random=44",
    "https://picsum.photos/200?random=45",
    "https://picsum.photos/200?random=46",
    "https://picsum.photos/200?random=47",
    "https://picsum.photos/200?random=48",
    "https://picsum.photos/200?random=49",
    "https://picsum.photos/200?random=50",
    "https://picsum.photos/200?random=51",
    "https://picsum.photos/200?random=52",
    "https://picsum.photos/200?random=53",
    "https://picsum.photos/200?random=54",
];

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Imagens</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {imagens.map((imagem, index) => (
          <TouchableOpacity style={styles.imagem} key={index}>
          <Image style={{flex: 1}} source={{ uri: imagem }}  />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 64,
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
    backgroundColor: "gray",
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingLeft: 8,
  },
  imagem: {
    height: 100,
    width: "31%",
  },
});

export default GaleriaScreen;