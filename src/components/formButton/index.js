import './form-button.css';

export const FormButton = (props) => {
    return (
        <button className="form__button">{props.children}</button>
    )
}