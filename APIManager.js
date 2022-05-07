class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {
        this.userGenerator()
        this.quoteGenerator()
        this.pokGenerator()
        this.aboutmeGenerator()
    }


    userGenerator() {
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: (gotdata) => {
                this.data.user = {
                    firstname: gotdata.results[0].name.first,
                    lastname: gotdata.results[0].name.last,
                    picture: gotdata.results[0].picture.thumbnail,
                    city: gotdata.results[0].location.city,
                    state: gotdata.results[0].location.state
                }
                console.log(this.data.user)
                this.data.friendslist = gotdata.results.map(friend => { return { firstname: friend.name.first, lastname: friend.name.last } }).splice(1, 6)
            },
            error: alert("Something went wrong!can not get the users info")
        })
    }

    quoteGenerator() {

        $.ajax({
            method: "GET",
            url: "https://api.kanye.rest",
            success: gotdata => {
                this.data.quote = {
                    quote: gotdata.quote,
                    author: "Kanye West"
                }
            },
            error: alert("can not get the random quote")
        })
    }

    
    pokGenerator() {
        let rand = Math.floor(Math.random() * 898) + 1
        $.ajax({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/${rand}/",
            success: (gotdata) => {
                this.data.pokemon = {
                    id: gotdata.id,
                    name: gotdata.name,
                    imgsURL: gotdata.sprites.front_default
                }
            },
            error: alert("can not get the pocemon")
        })
    }

    aboutmeGenerator() {
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=all-meat&paras=1",
            success: (gotdata) => {
                this.data.aboutmeText = gotdata[0]
            },
            error: alert("can not get the about me random text")
        })
    }

}
