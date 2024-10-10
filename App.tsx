import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import FlatCards from "./components/FlatCards";
import ScrollableCards from "./components/ScrollableCards";
import HeroCard from "./components/HeroCard";
import BlogCards from "./components/BlogCards";
import ContactList from "./components/ContactList";

function App()
{
  return(
    <SafeAreaView style={{backgroundColor : "#EAF0F1"}}>
      <ScrollView>
        <FlatCards />
        <ScrollableCards />
        <HeroCard />
        <BlogCards />
        <ContactList/>
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