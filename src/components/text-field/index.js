import './text-field.css';

export const FormTextField = (props)=>{
    //fique atento que, no universo React, os eventos são nomeados com camelCase, logo: onclick vira onClick.
    const placeHolder = `Digite o ${props.label}`
    
    const onChange = (event) => {
        props.onchange(event.target.value)    // calls onchange(value => setValue(value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onChange} required={props.required} placeholder={placeHolder}/>
        </div>
    )
}  