document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("rosterGrid");
    const render = list => {
        grid.innerHTML = "";
    
    
    
    
    
    
    
    
    render(players)}

        list.forEach(p => {
            const col = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${p.picture}" alt="${p.firstname} ${p.lastname}">
                <h3>${p.firstname} ${p.lastname}</h3>
                <p>Age: ${p.age}</p>
                <p>Position: ${p.position}</p>
            `;
            grid.appendChild(card);
        })})
