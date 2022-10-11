import { FilmCard } from '../filmCard';
import './genre.css';

export const GenreSection = ({genre,listedFilms,onRemoveFilm}) => {
    return (
        listedFilms.length>0 && 
        <section className="genre">
          <h2>{genre.title}</h2>
            <div className='films'>
                {listedFilms.map(film => 
                    <FilmCard
                        key={'film'+ film.filmTitle}
                        film={film}
                        listedFilms={listedFilms}
                        onRemoveFilm={(removedFilm) => onRemoveFilm(removedFilm)}
                    />    
                )}
            </div>
        </section>   
    )
}