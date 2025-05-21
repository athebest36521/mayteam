class Player {
    constructor(firstname, lastname, age, position, jersey, picture) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.position = position
        this.jersey = jersey
        this.picture = picture
    }
    render() {
        let col = document.createElement("div");
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
        button.type = 'button'
        button.classList.add('btn')
        button.classList.add("btn-primary")
        player.appendChild(button)
        button.setAttribute("data-bs-target", '#modal');
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-firstname", this.firstname)
        button.setAttribute("data-lastname", this.lastname)
        button.setAttribute("data-age", this.age)
        button.setAttribute("data-position", this.position)
        button.setAttribute("data-jersey", this.jersey)
        button.addEventListener("click", (event) => {
            const click = event.target


            document.getElementById('title').textContent = click.getAttribute("data-firstname") + " " + click.getAttribute("data-lastname")
            document.getElementById('age').textContent = "Age: " + click.getAttribute("data-age")
            document.getElementById('jersey').textContent = "Jersey: " + click.getAttribute("data-jersey")
            document.getElementById('position').textContent = "Position: " + click.getAttribute("data-position")
        })
        // Add the data-toggle attribute
        col.appendChild(player);
        return col
    }

}

class Team {
    constructor(p) {
        this.player = []
        p.forEach(pp => {
            this.player.push(new Player(pp.firstname, pp.lastname, pp.age, pp.position, pp.jersey, pp.picture))
        })
    }
    getAllPlayers() {
        const grid = document.getElementById("rosterGrid")

        this.player.forEach(p => {
            grid.appendChild(p.render())
        })

    }
}





document.addEventListener("DOMContentLoaded", () => {
    let team = new Team(players)
    team.getAllPlayers()
})

function modal() {

}

