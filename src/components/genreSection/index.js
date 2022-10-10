import { FilmCard } from '../filmCard';
import './genre.css';

export const GenreSection = ({genre,listedFilms}) => {
    return (
        listedFilms.length>0 && 
        <section className="genre">
          <h2>{genre.title}</h2>
            <div className='films'>
                {listedFilms.map(film => 
                    <FilmCard
                        key={'film'+ film.filmTitle}
                        film={film}
                    />    
                )}
            </div>
        </section>   
    )
}