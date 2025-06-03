// roster.js
//   // ----- DOM element references -----
//grid as a refrence to pull up id 'rosterGrid'
   const grid = document.getElementById('rosterGrid') // container for all player cards
   
  

   // ----- Function to load the roster -----
  document.addEventListener("DOMContentLoaded", () => {
    // Fail-safe: exit if the roster container is missing
    //if rosterGrid doesn't exist, diplay following error
    if (!grid) {
      console.error("Could not find #rosterGrid in the DOM.");
      return;
    }
//starts to store current roster
    grid.innerHTML = ""; // reset/clear current roster
    //iterator foreach loop p represents the current object in the list, 
    //line 20 ensures references the <div> tag, 21 represents Bootstrap
    players.forEach((p) => {
      const col = document.createElement("div");
      col.className = "col-6 col-lg-2"; // responsive grid: 2 per row on mobile, 5 per row on desktop

      // Line 27: Stores content for the player (p) alt if img isn't there, or it fails to load 
      //line 31: Displays first name and last name under the player
      //line 34: adds button, click reveals more player info, 
      //Inject card HTML using Bootstrap classes
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
        
         
         `

       // Add the card to rosterGrid
       grid.appendChild(col)
     })
   }
         
    );
    //takes in playerId and see if it exists
    //if playerId exists, it contains "true", if not, then "false"
function seeMore(playerId) {
    // Find the player from your array using the ID
   
   
    const player = players.find(p => `${p.firstname}-${p.lastname}` === playerId);
//if the player doesn't exist, error in console as "Player not found!"
    if (!player) {
        console.error("Player not found!");
        return;
    }

    // Assigning HTML ID names with syntax that represents each of the player's info
    document.getElementById("title").textContent = `${player.firstname} ${player.lastname}`;
    document.getElementById("age").textContent = `Age: ${player.age}`;
    document.getElementById("position").textContent = `Position: ${player.position}`;
    document.getElementById("jersey").textContent = `Jersey: ${player.jersey}`;

    // Creates the Bootstrap modal and assigns it to variable, "modal"
    const modal = new bootstrap.Modal(document.getElementById("modal"));
    modal.show();
}