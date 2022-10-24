const Checkbox = (props) => {
    return (
        <form onChange={props.onChange} className="checkboxForm">
            {props.options.map((e) => {

                return <div key={e.value}>
                    <input type="checkbox" name={e.value} value={e.value} />
                    <label htmlFor={e.value}>{e.value}</label>
                </div>
            })}
        </form>
    );
}

export default Checkbox;