import { View, Text, StyleSheet, Image } from "react-native";

function FlatCards()
{
    return(
        <View>
            <Text style={styles.heading}>Static Cards</Text>
            <View style={styles.cardContainer}>
                <Image style={styles.card} source={{uri : "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Antony-Starr-as-Homelander-in-The-Boys.jpg"}}/>
                <Image style={styles.card} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeEn8IeNFv67i6Gsye0H41CsIMfFt1N-aUQ&s"}}/>
                <Image style={styles.card} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77wHlbSXMVCMtV3_XALcmwbp29iLW4-xaaQ&s"}}/>
                <Image style={styles.card} source={{uri : "https://upload.wikimedia.org/wikipedia/en/b/b7/Billy_Butcher.jpg"}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading : {
        fontSize : 25,
        paddingTop : 20,
        paddingHorizontal : 8,
        fontWeight : "bold",
    },
    card : {
        borderRadius : 10,
        height : 100,
        width : 100,
        marginHorizontal : 8,
    },
    cardContainer : {
        flexDirection : "row",
        marginTop : 10
    }
})

export default FlatCards;