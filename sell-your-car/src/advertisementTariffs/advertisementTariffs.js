import Table from 'react-bootstrap/Table';
import "./advertismentTariffs.css"

function AdvertisementTariffs() {
    return (

        <div>
            <h4>Тарифи</h4>
            <div className="tariffsUnderline"></div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Размер</th>
                        <th>Позиция</th>
                        <th>IMP Дневно</th>
                        <th>CPM</th>
                        <th>Големина</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>300Х250</td>
                        <td>Първа страница</td>
                        <td>380 000</td>
                        <td>8,00 лв.</td>
                        <td>До 50 kb</td>
                    </tr>
                    <tr>
                        <td>300Х250</td>
                        <td>Вътрешни страници</td>
                        <td>1 630 000</td>
                        <td>5,00 лв.</td>
                        <td>До 50 kb.</td>
                    </tr>
                    <tr>
                        <td>300Х250</td>
                        <td>Всички страници</td>
                        <td>2 500 000</td>
                        <td>6,00 лв.</td>
                        <td>До 50 kb</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AdvertisementTariffs;

