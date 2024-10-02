const movies = [
	{
		"idMovieInfo": "1",
		"moiveName": "Oppenheimer",
		"releaseYear": 2023,
		"description": "Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
		"runtime": "3h",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.4,
		"movieRating": "R",
		"genre": "Biography, Drama, History",
		"language": "English",
		"id": "1"
	},
	{
		"idMovieInfo": "2",
		"moiveName": "Joker",
		"releaseYear": 2019,
		"description": "Joker: Directed by Todd Phillips. With Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy. During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
		"runtime": "2h 2m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMTcyNjU1MjQ3MF5BMl5BanBnXkFtZTgwNTk1MDA4NzM@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.4,
		"movieRating": "A",
		"genre": "Crime, Drama, Thriller",
		"language": "English",
		"id": "2"
	},
	{
		"idMovieInfo": "3",
		"moiveName": "Interstellar",
		"releaseYear": 2014,
		"description": "Interstellar: Directed by Christopher Nolan. With Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow. When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
		"runtime": "2h 49m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.7,
		"movieRating": "UA",
		"genre": "Adventure, Drama, Sci-Fi",
		"language": "English",
		"id": "3"
	},
	{
		"idMovieInfo": "4",
		"moiveName": "Inception",
		"releaseYear": 2010,
		"description": "Inception: Directed by Christopher Nolan. With Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy. A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
		"runtime": "2h 28m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.8,
		"movieRating": "UA",
		"genre": "Action, Adventure, Sci-Fi",
		"language": "English",
		"id": "4"
	},
	{
		"idMovieInfo": "5",
		"moiveName": "The Dark Knight",
		"releaseYear": 2008,
		"description": "The Dark Knight: Directed by Christopher Nolan. With Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine. When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		"runtime": "2h 32m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 9.0,
		"movieRating": "UA",
		"genre": "Action, Crime, Drama",
		"language": "English",
		"id": "5"
	},
	{
		"idMovieInfo": "6",
		"moiveName": "The Matrix",
		"releaseYear": 1999,
		"description": "The Matrix: Directed by Lana Wachowski, Lilly Wachowski. With Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving. When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
		"runtime": "2h 16m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.7,
		"movieRating": "A",
		"genre": "Action, Sci-Fi",
		"language": "English",
		"id": "6"
	},
	{
		"idMovieInfo": "7",
		"moiveName": "Avengers: Infinity War",
		"releaseYear": 2018,
		"description": "Avengers: Infinity War: Directed by Anthony Russo, Joe Russo. With Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans. The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
		"runtime": "2h 29m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.4,
		"movieRating": "UA",
		"genre": "Action, Adventure, Sci-Fi",
		"language": "English",
		"id": "7"
	},
	{
		"idMovieInfo": "8",
		"moiveName": "Logan",
		"releaseYear": 2017,
		"description": "Logan: Directed by James Mangold. With Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook. In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
		"runtime": "2h 17m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.1,
		"movieRating": "A",
		"genre": "Action, Drama, Sci-Fi",
		"language": "English",
		"id": "8"
	},
	{
		"idMovieInfo": "9",
		"moiveName": "Pirates of the Caribbean: The Curse of the Black Pearl",
		"releaseYear": 2003,
		"description": "Pirates of the Caribbean: The Curse of the Black Pearl: Directed by Gore Verbinski. With Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley. Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
		"runtime": "2h 23m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.1,
		"movieRating": "UA",
		"genre": "Action, Adventure, Fantasy",
		"language": "English",
		"id": "9"
	},
	{
		"idMovieInfo": "10",
		"moiveName": "Spider-Man: No Way Home",
		"releaseYear": 2021,
		"description": "Spider-Man: No Way Home: Directed by Jon Watts. With Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon. With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
		"runtime": "2h 28m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.2,
		"movieRating": "UA",
		"genre": "Action, Adventure, Fantasy",
		"language": "English",
		"id": "10"
	},
	{
		"idMovieInfo": "11",
		"moiveName": "Deadpool & Wolverine",
		"releaseYear": 2024,
		"description": "Deadpool & Wolverine: Directed by Shawn Levy. With Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen. Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
		"runtime": "2h 8m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMWE0YzkwNDktM2FjMS00NWVhLThhNmUtNTY5MmI1ZjVlNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.0,
		"movieRating": "A",
		"genre": "Action, Adventure, Comedy",
		"language": "English",
		"id": "11"
	},
	{
		"idMovieInfo": "12",
		"moiveName": "Spider-man: Across the Spider-verse",
		"releaseYear": 2023,
		"description": "Spider-man: Across the Spider-verse: Directed by Joaquim Dos Santos, Kemp Powers, Justin K. Thompson. With Shameik Moore, Hailee Steinfeld, Brian Tyree Henry, Luna Lauren Velez. Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
		"runtime": "2h 20m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BOGYwOWJmYTAtOGM3Ni00MTU3LTg3MTUtNWUxNjliOTJhY2QwXkEyXkFqcGdeQXVyMTU4OTc2NjMx._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.6,
		"movieRating": "U",
		"genre": "Animation, Action, Adventure",
		"language": "English",
		"id": "12"
	},
	{
		"idMovieInfo": "13",
		"moiveName": "WALL·E",
		"releaseYear": 2008,
		"description": "WALL·E: Directed by Andrew Stanton. With Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard. A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.",
		"runtime": "1h 38m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.4,
		"movieRating": "U",
		"genre": "Animation, Adventure, Family",
		"language": "English",
		"id": "13"
	},
	{
		"idMovieInfo": "14",
		"moiveName": "Star Wars: Episode V - The Empire Strikes Back",
		"releaseYear": 1980,
		"description": "Star Wars: Episode V - The Empire Strikes Back: Directed by Irvin Kershner. With Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams. After the Empire overpowers the Rebel Alliance, Luke Skywalker begins his Jedi training with Yoda. At the same time, Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.",
		"runtime": "2h 4m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.7,
		"movieRating": "UA",
		"genre": "Action, Adventure, Fantasy",
		"language": "English",
		"id": "14"
	},
	{
		"idMovieInfo": "15",
		"moiveName": "The Lord of the Rings: The Fellowship of the Ring",
		"releaseYear": 2001,
		"description": "The Lord of the Rings: The Fellowship of the Ring: Directed by Peter Jackson. With Alan Howard, Noel Appleby, Sean Astin, Sala Baker. A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		"runtime": "2h 58m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.9,
		"movieRating": "U",
		"genre": "Action, Adventure, Drama",
		"language": "English",
		"id": "15"
	},
	{
		"idMovieInfo": "16",
		"moiveName": "Forrest Gump",
		"releaseYear": 1994,
		"description": "Forrest Gump: Directed by Robert Zemeckis. With Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys. The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
		"runtime": "2h 22m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BOWNmNzdjYjQtZjIyOS00MDhiLTg4ZWUtZGZkZDE4ZDQwZTY1XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.8,
		"movieRating": "UA",
		"genre": "Drama, Romance",
		"language": "English",
		"id": "16"
	},
	{
		"idMovieInfo": "17",
		"moiveName": "Gladiator",
		"releaseYear": 2000,
		"description": "Gladiator: Directed by Ridley Scott. With Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed. A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
		"runtime": "2h 35m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 8.5,
		"movieRating": "UA",
		"genre": "Action, Adventure, Drama",
		"language": "English",
		"id": "17"
	},
	{
		"idMovieInfo": "18",
		"moiveName": "The Lord of the Rings: The Return of the King",
		"releaseYear": 2003,
		"description": "The Lord of the Rings: The Return of the King: Directed by Peter Jackson. With Noel Appleby, Ali Astin, Sean Astin, David Aston. Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		"runtime": "3h 21m",
		"thumbnailURL": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
		"reviewRating": 9.0,
		"movieRating": "U",
		"genre": "Action, Adventure, Drama",
		"language": "English",
		"id": "18"
	}
]

export default movies;