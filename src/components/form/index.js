import './form.css';
import { useState } from 'react'
import { FormTextField } from '../text-field';
import { Dropdown } from '../dropdown';
import { FormButton } from '../formButton';

export const Form = (props)=>{
    //fique atento que, no universo React, os eventos são nomeados com camelCase, logo: onclick vira onClick.
    const [filmTitle,setFilmTitle] = useState('');
    const [filmLink,setFilmLink] = useState('');
    const [filmImage,setFilmImage] = useState('');
    const [genre,setGenre] = useState('')


    const submitForm = (event) => {
        event.preventDefault();
        props.onSaveFilm({
            filmTitle,
            filmLink, 
            filmImage, 
            genre
        });
        // Clear Text Fields
        setFilmTitle('');
        setFilmLink('');
        setFilmImage('');
        setGenre('');
        
    }
    

    return (
        <section className="section__form container">
            <form className="form" onSubmit={submitForm}>
                <h2>Preencha os dados para criar o card dos Filmes e Séries.</h2>
                <FormTextField 
                    required={true} 
                    label="Título"
                    value={filmTitle}
                    onchange={value => setFilmTitle(value)}/>
                <FormTextField 
                    required={false} 
                    label="Link do filme ou série"
                    value={filmLink}
                    onchange={value => setFilmLink(value)}/>      
                <FormTextField 
                    required={false}
                    label="Endereço da imagem"
                    value={filmImage}
                    onchange={value => setFilmImage(value)}/>
                <Dropdown 
                    required={true} 
                    itens={props.genresList} 
                    label="Gênero"
                    value={genre}
                    onchange={value => setGenre(value)}/>
                    
                <FormButton>
                    Criar card
                </FormButton>
            </form>
        </section>  
    )
}