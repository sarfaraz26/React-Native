import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import FlatCards from "./components/FlatCards";
import ScrollableCards from "./components/ScrollableCards";

function App()
{
  return(
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollableCards />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "red"
  }
})


export default App;