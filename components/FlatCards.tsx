import { View, Text, StyleSheet } from "react-native";

function FlatCards()
{
    return(
        <View>
            <Text style={styles.heading}>Flat Cards</Text>
            <View style={styles.cardContainer}>
                <View style={[styles.card, {backgroundColor : "red"}]}>
                    <Text>First</Text>
                </View>
                <View style={[styles.card, {backgroundColor : "yellow"}]}>
                    <Text>Second</Text>
                </View>
                <View style={[styles.card, {backgroundColor : "orange"}]}>
                    <Text>Third</Text>
                </View>
                <View style={[styles.card, {backgroundColor : "pink"}]}>
                    <Text>Fourth</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading : {
        fontSize : 25,
        padding : 8,
        fontWeight : "bold"
    },
    card : {
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 10,
        height : 100,
        width : "20%",
        marginHorizontal : 8,
    },
    cardContainer : {
        flexDirection : "row",
    }
})

export default FlatCards;