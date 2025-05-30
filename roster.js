
   // constructor(firstname, lastname, age, position, jersey, picture) {



/*
document.addEventListener("DOMContentLoaded", () => {
    let team = new Team(players)
    team.getAllPlayers()
});
*/




// document.addEventListener('DOMContentLoaded', () => {
//   // ----- DOM element references -----
   const grid = document.getElementById('rosterGrid') // container for all player cards
  const searchInput = document.getElementById('searchInput') // search box for filtering players
   const sortSelect = document.getElementById('sortSelect') // dropdown for sorting options

   // Fail-safe: exit if the roster container is missing
  

   // ----- Function to render the roster -----
  //const render = players => {
  document.addEventListener("DOMContentLoaded", () => {
    if (!grid) {
      console.error("Could not find #rosterGrid in the DOM.");
      return;
    }

    grid.innerHTML = ""; // clear current roster
    players.forEach((p) => {
      const col = document.createElement("div");
      col.className = "col-6 col-lg-2"; // responsive grid: 2 per row on mobile, 5 per row on desktop

      // Inject card HTML using Bootstrap classes
      col.innerHTML = `
         <div class="card h-100 shadow-sm">
           <img src="${p.picture}" class="card-img-top" alt="${p.firstname} ${p.lastname}">
           <div class="card-body text-center">
             <h5 class="card-title mb-1">${p.firstname} ${p.lastname}</h5>
             
             <button class="btn-warning" onClick="seeMore('${p.firstname}-${p.lastname}')">More Info</button>
             
             <div id='${p.firstname}-${p.lastname}' style="display:none">
             
             <div class='badge badge-position badge-pos-${p.position}' style="color:black;">${p.position}</div>
  
             <p class="small text-muted mb-0">Age ${p.age}</p>
             <p class="jersey">Jersey: ${p.jersey}</p>
             
             <div>
             
             
             
           </div>
         </div>
         
         <script>
         
         function seeMore(){
           
           var content = document.getElementById('${p.firstname}-${p.lastname}');
           content.style.display = "block";
         
         }
         
         </script>
         
         `

       // Add the card to the grid
       grid.appendChild(col)
     })
   }
         
    );
function seeMore(playerId) {
    // Find the player from your array using the ID
    const player = players.find(p => `${p.firstname}-${p.lastname}` === playerId);

    if (!player) {
        console.error("Player not found!");
        return;
    }

    // Populate the modal with player data
    document.getElementById("title").textContent = `${player.firstname} ${player.lastname}`;
    document.getElementById("age").textContent = `Age: ${player.age}`;
    document.getElementById("position").textContent = `Position: ${player.position}`;
    document.getElementById("jersey").textContent = `Jersey: ${player.jersey}`;

    // Show the Bootstrap modal
    const modal = new bootstrap.Modal(document.getElementById("modal"));
    modal.show();
}