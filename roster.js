class Player{
constructor(firstname, lastname, age, position, jersey, picture){
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.position=position
    this.jersey=jersey
    this.picture=picture
}
render(){
    let col=document.createElement("div");
    col.classList.add("col")
    let player = document.createElement("div");
    player.classList.add("card")
    let image = document.createElement("img")
    image.src = this.picture
    image.alt = `${this.firstname} ${this.lastname}`
    player.appendChild(image)
    let ht = document.createElement("h3");
    ht.textContent = `${this.firstname} ${this.lastname}`
    player.appendChild(ht)
    const button = document.createElement("button");
    button.innerText = "Click Me";
    
    player.appendChild(button)
    col.appendChild(player)
    return col
}

}

class Team{
    constructor(p){
        this.player=[]
p.forEach(pp=>{
    this.player.push(new Player(pp.firstname, pp.lastname, pp.age, pp.position, pp.jersey, pp.picture))
})
    }
    getAllPlayers(){
    const grid = document.getElementById("rosterGrid")

this.player.forEach(p=>{
grid.appendChild(p.render())
})

    }
}





document.addEventListener("DOMContentLoaded", () => {
    let team = new Team(players)
    team.getAllPlayers()
})

function modal(){

}
