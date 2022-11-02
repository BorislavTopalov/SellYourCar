export default function ConfirmBox(props) {

    return (

        <div className={props.className}>
            <div className="confirmBox">
                <h5><strong>{props.textConfirm}</strong></h5>
                <div className="buttonsConfirmBox">
                    <button className="confirmButton" onClick={props.handleDelete}>Сигурен съм</button>
                    <button className="rejectButton" onClick={props.handleClose}>Отказвам</button>
                </div>

            </div>

        </div>
    )
}