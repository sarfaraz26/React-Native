import { ScrollView, StyleSheet, Text, View } from "react-native";

function ScrollableCards()
{
    return(
        <View>
            <Text style={styles.heading}>Scrollable Cards</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    heading : {
        fontSize : 25,
        padding : 8,
        fontWeight : "bold",
        marginTop : 10 
    }
})

export default ScrollableCards;