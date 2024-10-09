import { StyleSheet, Text, View, Image } from "react-native";

const HeroCard = () => {
    return(
        <View>
            <Text style={styles.heading}>Hero Card</Text>
            <View style={styles.heroCard}>
                <View style={styles.heroCardHead}>
                    <Image 
                    source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxN9WOBG-R6IlQQYaRSb2tyuEnDjFow6hNQ&s"}} 
                    style={styles.heroImg}
                    />
                </View>
                <View>
                    <Text style={styles.heroCardTitle}>Trunks</Text>
                    <Text style={styles.heroCardWords}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iste nemo repudiandae ratione eos, deserunt eveniet dolore voluptate nostrum dicta tempora officia quibusdam debitis quod!</Text>
                    <Text style={styles.heroCardWords}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, vero.</Text>
                </View>
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
    heroCard : {
        height : 370,
        width : 373,
        margin : 10,
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "gray",
        backgroundColor : "whitesmoke"
    },
    heroCardHead : {
        height : 200,
        borderRadius : 10
    },
    heroImg : {
        height : 200,
        width : 373,
        borderRadius : 10
    },
    heroCardTitle : {
        fontSize : 23,
        fontWeight : "bold",
        // color : "gray",
        paddingHorizontal : 10,
        paddingTop : 5
    },
    heroCardWords : {
        padding : 5,
        paddingHorizontal : 13,
    }
})

export default HeroCard;