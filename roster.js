

// document.addEventListener("DOMContentLoaded", () => {
//     const grid = document.getElementById("rosterGrid");
//     const render = list => {
//         grid.innerHTML = "";
    
    
    
    
    
    
    
    
//     render(players)}

//         list.forEach(p => {
//             const col = document.createElement("div");
//             card.className = "card";
//             card.innerHTML = `
//                 <img src="${p.picture}" alt="${p.firstname} ${p.lastname}">
//                 <h3>${p.firstname} ${p.lastname}</h3>
//                 <p>Age: ${p.age}</p>
//                 <p>Position: ${p.position}</p>
//             `;
//             grid.appendChild(card);
//         })})










document.addEventListener("DOMContentLoaded", () =>{
    render()
})
function render(){
    const grid = document.getElementById("rosterGrid")
    players.forEach(p=>{
      let player = document.createElement("div");
      player.classList.add("card")
      let image = document.createElement("img")
    image.src=p.picture
    image.alt=`${p.firstname} ${p.lastname}`
    player.appendChild(image)
let ht=document.createElement("h3");
ht.textContent=`${p.firstname} ${p.lastname}`
player.appendChild(ht)
grid.appendChild(player)
    });
}