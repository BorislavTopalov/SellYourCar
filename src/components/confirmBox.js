export default function ConfirmBox(props) {

    return (

        <div className={props.className}>
            <div className="confirmBox">
                <h5><strong>Сигурен ли си, че искаш да изтриеш профила си?</strong></h5>
                <div className="buttonsConfirmBox">
                    <button className="confirmButton" onClick={props.deleteAcount}>Сигурен съм</button>
                    <button className="rejectButton" onClick={props.handleClose}>Отказвам</button>
                </div>

            </div>

        </div>
    )
}