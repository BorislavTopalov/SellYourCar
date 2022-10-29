const Checkbox = (props) => {
    return (
        <form onChange={props.onChange} className="checkboxForm">
            {props.options.map((e) => {

                return <div key={e.label}>
                    <input type="checkbox" name={e.value} value={e.id} />
                    <label htmlFor={e.value}>{e.value}</label>
                </div>
            })}
        </form>
    );
}

export default Checkbox;