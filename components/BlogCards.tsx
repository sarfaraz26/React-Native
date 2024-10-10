import { ScrollView, View, StyleSheet, Text, Image, Alert, TouchableOpacity, Linking } from "react-native"
import movies from "../mocks/moviesData"

const BlogCards = () => {

    function btnVisitClick(){
        Alert.alert("This functionality not available now");
    }

    async function btnShareClick()
    {
        const url : string = "http://wwwdragonballzcom/"
        const isSupportedLink : boolean =  await Linking.canOpenURL(url);

        if(isSupportedLink)
            await Linking.openURL(url);
        else
            Alert.alert("Invalid link");
    }

    return(
        <View>
            <Text style={styles.heading}>Scrollable Blog Cards</Text>
            <ScrollView horizontal={true}>
                {movies.map((movie, index) => (
                    <View style={styles.blogCard} key={movie.id}>
                        <View style={styles.blogCardTitle}>
                            <Text style={styles.blogCardTitleText}>{movie.name}</Text>
                        </View>
                        <View style={styles.blogCardPictureDiv}>
                            <Image style={styles.blogCardPicture} source={{ uri : movie.imgURL}}/>
                        </View>
                        <View style={styles.blogCardText}>
                            <Text>{movie.description}</Text>
                        </View>
                        <View style={styles.blogCardLinks}>
                            <View style={[styles.blogCardLink, {borderRightColor : "gray", borderRightWidth : 1}]}>
                                <TouchableOpacity onPress={btnShareClick}>
                                    <Text style={styles.linkText}>Share</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.blogCardLink}>
                                <TouchableOpacity onPress={btnVisitClick}>
                                    <Text style={styles.linkText}>Visit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>            
        </View>
    )
}

const styles = StyleSheet.create({
    heading : {
        fontSize : 25,
        paddingTop : 15,
        paddingHorizontal : 8,
        fontWeight : "bold",
    },
    blogCard : {
        height : 370,
        width : 373,
        margin : 10,
        borderWidth : 1,
        borderColor : "gray",
        backgroundColor : "whitesmoke",
        borderRadius : 10
    },
    blogCardTitle : {
        height : 58,
        justifyContent : "center",
        alignItems : "center",
        borderBottomColor : "gray",
        borderBottomWidth : 1,
    },
    blogCardTitleText : {
        fontSize : 22,
        fontWeight : "bold",
        color : "gray",
    },
    blogCardPictureDiv : {
        height : 170,
    },
    blogCardPicture : {
        height : 170
    },
    blogCardText : {
        height : 100,
        padding : 10,
        borderBottomColor : "gray",
        borderBottomWidth : 1
    },
    blogCardLinks : {
        flexDirection : "row",
        height : 40
    },
    blogCardLink: {
        flex: 1, // Makes each link take up equal space
        justifyContent: "center",
        alignItems: "center",
    },
    linkText: {
        textAlign: "center",
        fontWeight : "bold"
    },
})

export default BlogCards;