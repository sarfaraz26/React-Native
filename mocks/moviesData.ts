type movieSchema = {
    id : number,
    name : string,
    imgURL : string,
    description : string
}

const movies : movieSchema[] = [
    {
        id : 1,
        name : "Batman - The Dark Knight",
        imgURL : "https://theconsultingdetectivesblog.com/wp-content/uploads/2014/06/the-dark-knight-original.jpg",
        description : " follows Bruce Wayne, also known as Batman, as he battles the Joker, a criminal mastermind intent on causing chaos in Gotham City. After successfully dismantling organized crime with the help of Lieutenant James Gordon and District Attorney Harvey Dent, Batman faces his greatest challenge yet."
    },
    {
        id : 2,
        name : "Superman - Man of Steel",
        imgURL : "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/man-of-steel_a430ea.jpg",
        description : "follows Clark Kent, a young man grappling with his extraordinary abilities and the weight of his destiny. Raised by his adoptive parents in Kansas, Clark discovers his alien origins and the truth about his home planet, Krypton."
    },
    {
        id : 3,
        name : "Aquaman - The Lost Kingdom",
        imgURL : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/12/aquaman-poster2.jpg",
        description : "follows Arthur Curry, the half-human, half-Atlantean heir to the underwater kingdom of Atlantis. As he grapples with his dual identity, Arthur is thrust into a battle for the throne against his half-brother, Orm, who seeks to unite the oceanic kingdoms and wage war on the surface world"
    }
] 

export default movies;