export default function Input({type,name,label,changeHandler,value}) {
    return (
        <>
            <label htmlFor={`details-${name}`}>
                <span>{label}</span>
                <input
                    type={type}
                    name={name}
                    id={`details-${name}`}
                    value={value}
                    onChange={(e)=>changeHandler(e.target.value)}
                />
            </label>
        </>

    );
}