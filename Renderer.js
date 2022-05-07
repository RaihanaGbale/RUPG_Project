class Renderer {
    constructor() {}

    emptyPage() {
        $(".meat-container").empty()
        $(".user-container").empty()
        $(".quote-container").empty()
        $(".pocemon-container").empty()
        $(".friends-container").empty()
    }


    _renderuser(user) {
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(user)
        $(".user-container").append(newHTML)
    }

    _renderFriends(userfriends) {
        let source = $("#friends-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({userfriends})
        $(".friends-container").append(newHTML)
    }

    _renderQuote(quoteInfo) {
        let source = $("#quote-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(quoteInfo)
        $(".quote-container").append(newHTML)
    
    }

    _renderPokemon(pokemonInfo) {
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(pokemonInfo)
        $(".pokemon-container").append(newHTML)
    }

    _renderMeat(meatText) {
        let source = $("#meat-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(meatText)
        $(".meat-container").append(newHTML)
    }


    render (data) {     
        this._renderUsers(data.user)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.aboutmeText)
        this._renderFriends(data.friendslist)
    }

}