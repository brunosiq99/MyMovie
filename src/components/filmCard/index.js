import './film-card.css';

export const FilmCard = ({film,onRemoveFilm}) => {
    const imgUrl = {backgroundImage: "url(" +  film.filmImage  + ")"};
    return (
        <div className='film-card'>
            <a href={film.filmLink} style={imgUrl} className='a-img'></a>
            <button onClick={() => onRemoveFilm(film)}><i className="fa-solid fa-x"></i></button>
            <h3>{film.filmTitle}</h3>
        </div>
    )
}