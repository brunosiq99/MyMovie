import './dropdown.css';

export const Dropdown = (props) => {
    const onChange = (event) => {
        props.onchange(event.target.value);    // calls onchange(value => setValue(value)
    }

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={onChange} value={props.value} required={props.required}>
                <option value="" disabled></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}