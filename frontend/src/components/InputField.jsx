import "../styles/InputField.css"

function InputField({ label, value, disabled = false, type="text", placeholder, required = true}) {
    return (
        <>
            <label className="grey-text">{label}{required && <span className="required">*</span>}</label>
            <div>
                <input type={type} placeholder={placeholder} value={value} disabled={disabled} required={required}></input>
            </div>
        </>
    )
}

export default InputField