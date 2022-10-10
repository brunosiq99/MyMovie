import './film-card.css';

export const FilmCard = ({film}) => {
    const imgUrl = {backgroundImage: "url(" +  film.filmImage  + ")"};
    return (
        <div className='film-card'>
            <div style={imgUrl} className='div-img'>   
            </div>
            <h3>{film.filmTitle}</h3>
        </div>
    )
}