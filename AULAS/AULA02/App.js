import { View } from "react-native";

function App(){
  return (
    <View style={{flex: 1, flexDirection: "colunm" , 
    justifyContent: "space-between", alignItems: "center", backgroundColor: "blue"}}>
      <View style={{height: 50, width:50,  backgroundColor: "red"}}>
        </View>
        <View style={{height: 50, width:50,  backgroundColor: "green"}}>
        </View>
        <View style={{height: 50, width:50,  backgroundColor: "yellow"}}>
        </View>
    </View>
    )
}
  

export default App;