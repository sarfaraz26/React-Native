import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

function ScrollableCards()
{
    return(
        <View>
            <Text style={styles.heading}>Scrollable Cards</Text>
            <ScrollView horizontal={true}>
                <Image style={styles.card} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nAJKW3SVq8JoykW1j54IqYZzusjKEYY-WA&s"}}/>
                <Image style={styles.card} source={{uri : "https://i1.sndcdn.com/artworks-y1WcOJwtzfhThB5i-kDG3rg-t500x500.jpg"}}/>
                <Image style={styles.card} source={{uri : "https://pm1.aminoapps.com/6921/bcb1289b1311718cb1035411f52d2aaa6199da1er1-678-960v2_00.jpg"}}/>
                <Image style={styles.card} source={{uri : "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/08/Gohans-Beast-Form-Dragon-Ball-Super-Super-Hero-scaled.jpg"}}/>
                <Image style={styles.card} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtJnc0GuHcYTO4fXyNfooZvFRmpeMaAhnVw&s"}}/>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    heading : {
        fontSize : 25,
        padding : 8,
        fontWeight : "bold",
        marginTop : 10 
    },
    card : {
        borderRadius : 10,
        height : 100,
        width : 100,
        marginHorizontal : 8,
    },
})

export default ScrollableCards;