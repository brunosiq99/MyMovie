import './App.css';
import { useState } from 'react';
import { Header } from './components/header';
import { Form } from './components/form'; 
import { GenreSection } from './components/genreSection';


function App() {
	const defaultMoviesList = [
		{
		  "filmTitle": "Pulp Fiction",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdnAx4RcqdeSRes2ziir-xst2CwO0G99WDZHHTe1a3bQzlsxw",
		  "genre": "Drama"
		},
		{
		  "filmTitle": "Shrek",
		  "filmLink": "",
		  "filmImage": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg",
		  "genre": "Animação"
		},
		{
		  "filmTitle": "Superbad - É Hoje",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnYuL43lbJI-ZP3Ok3xf0k0XvvdF7l9-_k7sdVKouRFRV8pVYI",
		  "genre": "Comédia"
		},
		{
		  "filmTitle": "Vizinhos",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfbhJMeqN7KP_ce9e4102nTZgdp0I3nPw5-qWqaDvjm6bMJ9w",
		  "genre": "Comédia"
		},
		{
		  "filmTitle": "Monstros S.A.",
		  "filmLink": "",
		  "filmImage": "https://upload.wikimedia.org/wikipedia/pt/7/75/Monsters_Inc.jpg",
		  "genre": "Animação"
		},
		{
		  "filmTitle": "Toy Story",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZg8Z2KmzuzDkV40IGoyirmEjj5kwxrqzI7qOd9vWtl79-IOW4",
		  "genre": "Animação"
		},
		{
		  "filmTitle": "Up - Altas Aventuras",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQibI4bWhWgHKSYGic70FJDt3fYBDUrANt_j5x4g9mK-wIoLxz1",
		  "genre": "Animação"
		},
		{
		  "filmTitle": "Carros",
		  "filmLink": "",
		  "filmImage": "https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg",
		  "genre": "Animação"
		},
		{
		  "filmTitle": "Cidade de Deus",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEuGqzqbuqNJxbBunRYMRTjFzroETQjfVTuFjX9SZ2Z8RJpoZq",
		  "genre": "Drama"
		},
		{
		  "filmTitle": "Parasita",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJmbajoepvv5M8KO0eev1s80qkpthWlbLvWR1L0BsMat307ypG",
		  "genre": "Drama"
		},
		{
		  "filmTitle": "Bacurau",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-72SlKYgPNQ0aefS7r0UUYdEVXlUTr4Pgapmk3xw8xbBK7G0",
		  "genre": "Drama"
		},
		{
		  "filmTitle": "Vida de Inseto",
		  "filmLink": "",
		  "filmImage": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgxDg8_LIduFqv4q4k2Ur9qXGQU0-4ZHpfpkgUZNxxbOSdnCo_",
		  "genre": "Animação"
		}
	]
	const setLocalStorage = () => {
		const localStorageFilms = JSON.parse(localStorage.getItem('listedFilms'));
		return (localStorage.getItem('listedFilms') !== null ? localStorageFilms : defaultMoviesList); 
	}
	const updateLocalStorage = () => {
		localStorage.setItem('listedFilms', JSON.stringify(listedFilms));	
	}

	const loadedFilmList = setLocalStorage()
	const genres = [
		{
			title:"Ação e aventura",
			primaryColor: '#57c278'
		},{
			title:"Animação",
			primaryColor:'#a6d157'
		},{
			title:"Comédia",
			primaryColor:'#e06b69'
		},{
			title:"Documentário",
			primaryColor:'#db6ebf'
		},{
			title:"Drama",
			primaryColor:'#db6ebf'
		},{
			title:"Ficção científica",
			primaryColor:'#82cffa'
		},{
			title:"Romance",
			primaryColor:'#db6ebf'
		},{
			title:"Suspense",
			primaryColor:'#ffba05'
		},{
			title:"Terror",
			primaryColor:'#a6d157'
		}
    ]

	const [listedFilms,setFilmList] = useState(loadedFilmList);
	const newSavedFilm = (film)=>{
		setFilmList([...listedFilms, film]);
	}
	setInterval(()=>updateLocalStorage(),2500)

  	return (
		<div className="App">
			<Header
				key='header'
			/>
			<Form 
				key='form'
				genresList={genres.map(genre => genre.title)}
				onSaveFilm={film => newSavedFilm(film)}
			/>

			{genres.map(genre => 
				<GenreSection
					key={genre.title} 
					genre={genre}
					listedFilms={listedFilms.filter(film=> film.genre === genre.title)}
				/>
			)}
			
		</div>
  	);
}

export default App;
