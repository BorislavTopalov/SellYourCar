const Select = (props) => {

    return (
        <select value={props.selectedOption} onChange={props.onChange} name={props.name} id={props.id}>
            {props.options.map((e) => {
                return <option key={e.value} value={e.value}>{e.label}</option>
            })}
        </select>
    );
}
 
export default Select;