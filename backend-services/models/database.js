const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database
const db = new sqlite3.Database("./users.db");

// Create users table
// Drop users table if it exists
// db.run(`DROP TABLE IF EXISTS users`, function (err) {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log("Table dropped successfully.");
//   }
// });

// db.run(`CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     genre TEXT,
//     bpm_low INTEGER,
//     bpm_high INTEGER,
//     avatar_url TEXT,
//     description TEXT,
//     soundcloud_profile_link TEXT,
//     event_type TEXT,
//     played_at TEXT
// )`);

// Insert dummy users into the table
// db.serialize(() => {
//   const users = [
//     {
//       name: "Alice",
//       genre: "Alternative Rock",
//       bpm_low: 105,
//       bpm_high: 135,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Alice",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "House party,Club",
//       played_at: "Space Ibiza",
//     },
//     {
//       name: "Bob",
//       genre: "Ambient",
//       bpm_low: 110,
//       bpm_high: 130,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Bob",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "Bar",
//       played_at: "Pacha",
//     },
//     {
//       name: "Charlie",
//       genre: "Classical",
//       bpm_low: 105,
//       bpm_high: 135,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Charlie",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "Club",
//       played_at: "Fabric",
//     },
//     {
//       name: "David",
//       genre: "Country",
//       bpm_low: 110,
//       bpm_high: 130,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for David",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "Wedding",
//       played_at: "Egg London",
//     },
//     {
//       name: "Ella",
//       genre: "Dance & EDM",
//       bpm_low: 105,
//       bpm_high: 135,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Ella",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "House party,Bar",
//       played_at: "Ministry of Sound",
//     },
//     {
//       name: "Frank",
//       genre: "Dancehall",
//       bpm_low: 110,
//       bpm_high: 130,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Frank",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "Club",
//       played_at: "XOYO",
//     },
//     {
//       name: "Grace",
//       genre: "Deep House",
//       bpm_low: 105,
//       bpm_high: 135,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Grace",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "Bar",
//       played_at: "Corsica Studios",
//     },
//     {
//       name: "Henry",
//       genre: "Disco",
//       bpm_low: 110,
//       bpm_high: 130,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Henry",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "Wedding",
//       played_at: "Oval Space",
//     },
//     {
//       name: "Egorg",
//       genre: "Techno",
//       bpm_low: 140,
//       bpm_high: 170,
//       avatar_url: "assets/example_avatar.jpg",
//       description: "Description for Egorg",
//       soundcloud_profile_link: "https://soundcloud.com/e_gorg",
//       event_type: "Other",
//       played_at: "Haus am See, Pacha",
//     },

//     // ... (Add more users as needed)
//   ];

//   users.forEach((user) => {
//     db.run(
//       "INSERT INTO users (name, genre, bpm_low, bpm_high, avatar_url, description, soundcloud_profile_link, event_type, played_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
//       [
//         user.name,
//         user.genre,
//         user.bpm_low,
//         user.bpm_high,
//         user.avatar_url,
//         user.description,
//         user.soundcloud_profile_link,
//         user.event_type,
//         user.played_at,
//       ],
//       function (err) {
//         if (err) {
//           console.error(err.message);
//         } else {
//           console.log(`User ${user.name} added successfully!`);
//         }
//       }
//     );
//   });
// });

module.exports = db;
