import { View, Text, StyleSheet, Image } from "react-native";
import contacts from "../mocks/contactData"

const ContactList = () => {
    return(
        <View>
            <Text style={styles.heading}>Contact List</Text>
            <View style={styles.container}>
                {contacts.map((contacx, index) => (
                    <View style={styles.contact} key={index}>
                        <Image style={styles.img} source={{uri : contacx.img}} />
                        <View style={styles.content}>
                            <Text style={styles.name}>{contacx.name}</Text>
                            <Text style={styles.msg}>{contacx.msg}</Text>
                        </View>
                    </View>
                ))}
            </View>
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
    container : {
        height : 500,
        marginHorizontal : 8,
        borderRadius : 10,
    },
    img : {
        height : 80,
        width : 80,
        borderRadius : 50
    },
    contact : {
        height : 90,
        flexDirection : "row",
        marginVertical : 5,
        backgroundColor : "whitesmoke",
        paddingVertical : 3,
        borderRadius : 10,
    },
    content : {
        height : 80,
        width : 280,
        paddingHorizontal : 12,
        paddingVertical : 15

    },
    name : {
        fontSize : 22,
        fontWeight : "bold",
    },
    msg : {
        fontSize : 15,
        fontWeight : "bold",
        color : "gray",
        paddingHorizontal : 0,
        paddingVertical : 2
    }
})

export default ContactList;