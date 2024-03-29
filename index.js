// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  { title: "Dream On", artist: "Aerosmith", genre: "Rock" },
  { title: "Carry on Wayward Son", artist: "Kansas", genre: "Rock" },
  { title: "Photograph", artist: "Def Leppard", genre: "Rock" },
  { title: "Dear Michael", artist: "Michael Jackson", genre: "Pop" },
  { title: "You Give Love A Bad Name", artist: "Bon Jovi", genre: "Rock" },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = [
  {Name: "StarLord" , genre: "Rock"},
  {Name: "Gamora" , genre:"Pop"},
  {Name: "Drax" , genre: "R&B"},
  {Name: "Rocket" , genre: "Rock"},
  {Name: "Groot" , genre: "Pop"},
  // Add preferences for Drax, Rocket, and Groot
];



// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    guardians.map((guardian)=>{
        //these 3 lines of code create a span element to hold each playlist
        let playlistBlock = document.createElement('div');
        let playlist = document.getElementById('playlists');
       // playlistBlock.style.display = 'inline-block'; 
        playlist.appendChild(playlistBlock);

        //these 3 lines are meant to append a title to each playlist
        let title = document.createElement('h2');
        title.innerText = guardian.Name + "'s Playlist";
        playlistBlock.appendChild(title);
        
//the following code will check if any songs match the genre the guardian
        const guardianPlaylist = songs.filter(song => (
            song.genre === guardian.genre
        ))

  guardianPlaylist.map((song)=>{
    let songLine = document.createElement('div');
    songLine.innerText = (`${song.title} by ${song.artist}`);
    playlistBlock.appendChild(songLine);
  })

    


    })
  // Use the map() function to create playlists for each Guardian
  // Your code here
}


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
