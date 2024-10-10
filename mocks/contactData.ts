type contactSchema = {
    id : number,
    name : string,
    img : string,
    msg : string
}


const contacts : contactSchema[] = [
    {
        id: 1,
        name: "Zatanna Zatara",
        img: "https://i.pinimg.com/736x/59/f8/e1/59f8e18ab6bd1203272fe7683c345f99.jpg",
        msg: "Hey, how have you been?"
    },
    {
        id: 2,
        name: "Barbara Gordon",
        img: "https://dennisupkins.wordpress.com/wp-content/uploads/2015/08/batgirlanimated.jpg",
        msg: "Let’s catch up soon!"
    },
    {
        id: 3,
        name: "Laurel Lance",
        img: "https://static.wikia.nocookie.net/shipping/images/8/8e/Dinah_Lance_Earth-16.jpg/revision/latest?cb=20220304035928",
        msg: "I loved our last conversation!"
    },
    {
        id: 4,
        name: "Diana Prince",
        img: "https://static.wikia.nocookie.net/dcmovies/images/b/b1/Wonder_Woman_DCAU.png/revision/latest?cb=20190515014353",
        msg: "Are you coming to the party?"
    },
    {
        id: 5,
        name: "Harley Quinn",
        img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/08/harley-quinn-arleen-sorkin-social-feature.jpg",
        msg: "Did you finish that project?"
    }
];

export default contacts;