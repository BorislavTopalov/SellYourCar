export default function DefaultAds() {

    const defaultCarsAndJeeps = [
        {
            autoData: "https://autodata24.com/mercedes-benz/list",
            image: "https://special.bg/wp-content/uploads/2020/12/1-5.jpg",
            make: "Mercedes-Benz",
            model: "G 65 AMG",
            engine: "Бензинов",
            price: 255100,
            currency: "EUR",
            date: 2020,
            millage: 10000,
            power: 650,
            transmission: "Автоматична",
            color: "Черен",
            euro: "Евро 6",
            region: "София",
            town: "гр.София",
            moreInfo: "Перфектен автомобил. Реални километри. Един собственик в Германия. Заслужава си да се види. Без коментар на цената!",
            vehicleCategory: "Джип",
            safetyOptions: "Антиблокираща система",
            interiorOptions: "Кожен салон",
            extras: [
                "GPS система за проследяване",
                "Автоматичен контрол на стабилността",
                "Адаптивни предни светлини",
                "Антиблокираща система",
                "Ел. разпределяне на спирачното усилие",
                "Auto Start Stop function",
                "Bluetooth handsfree система",
                "Адаптивно въздушно окачване",
                "Безключово палене",
                "Бордкомпютър",
                "Брониран",
                "Подсилени стъкла",
                "Централно заключване",
                "Теглич",
                "LED фарове",
                "Панорамен люк",
                "Кожен салон",
                "Хомологация N1"
            ],
            isLiked: false,
            mainCategory: "Автомобили и Джипове",
            contacts: "Борислав Топалов, тел. 0889352226, гр. София ",
            id: 1
        },
        {
            autoData: "https://autodata24.com/audi/list",
            image: "https://17457b87357a3c132a36-65a4e27ddcfba494e5d9d65eec1738bb.ssl.cf3.rackcdn.com/2019/08/2D1A95666_min.jpg",
            make: "Audi",
            model: "RS6",
            engine: "Бензинов",
            price: 145100,
            currency: "лв.",
            date: "2019",
            millage: "40000",
            color: "Син",
            euro: "Евро 6",
            moreInfo: "Перфектен автомобил. Реални километри. Един собственик в Германия. Заслужава си да се види. Без коментар на цената!",
            vehicleCategory: "Комби",
            safetyOptions: "Антиблокираща система",
            interiorOptions: "Кожен салон",
            region: "София",
            town: "гр.София",
            power: 605,
            transmission: "Автоматична",
            extras: [
                "GPS система за проследяване",
                "Автоматичен контрол на стабилността",
                "Адаптивни предни светлини",
                "Антиблокираща система",
                "Ел. разпределяне на спирачното усилие",
                "Auto Start Stop function",
                "Bluetooth handsfree система",
                "Адаптивно въздушно окачване",
                "Безключово палене",
                "Бордкомпютър",
                "Централно заключване",
                "Теглич",
                "LED фарове",
                "Панорамен люк",
                "Контрол на налягането на гумите",
                "Кожен салон",
                "Каско",
                "Спойлери"
            ],
            isLiked: false,
            mainCategory: "Автомобили и Джипове",
            contacts: "Борислав Топалов, тел. 0889352226, гр. София ",
            id: 2
        },
        {
            autoData: "https://autodata24.com/audi/list",
            image: "http://service21-tuning.com/wp-content/uploads/2018/05/Audi-A3-8L.jpg",
            make: "Audi",
            model: "А3",
            engine: "Бензинов",
            price: 5100,
            currency: "лв.",
            date: "2001",
            millage: "140000",
            color: "Сив",
            euro: "Евро 4",
            moreInfo: "Перфектен автомобил. Реални километри. Един собственик в Германия. Заслужава си да се види. Без коментар на цената!",
            vehicleCategory: "Бегачки",
            safetyOptions: "Антиблокираща система",
            interiorOptions: "Кожен салон",
            region: "София",
            town: "гр.София",
            power: 180,
            transmission: "Ръчна",
            extras: [
                "Антиблокираща система",
                "Bluetooth handsfree система",
                "Бордкомпютър",
                "Централно заключване",
                "Кожен салон",
                "Ксенон",
                "Каско",
                "Спойлери",
                "Шибедах"
            ],
            isLiked: false,
            mainCategory: "Автомобили и Джипове",
            contacts: "Борислав Топалов, тел. 0889352226, гр. София ",
            id: 3
        },
        {
            autoData: "https://autodata24.com/bmw/list",
            image: "https://www.motortrend.com/uploads/sites/5/2020/04/2020-BMW-M8-Competition-Coupe-29.jpg?fit=around%7C875:492",
            make: "BMW",
            model: "M8",
            engine: "Бензинов",
            price: 200000,
            currency: "лв.",
            date: "2021",
            millage: "14000",
            color: "Зелен",
            euro: "Евро 6",
            moreInfo: "Перфектен автомобил. Реални километри. Един собственик в Германия. Заслужава си да се види. Без коментар на цената!",
            vehicleCategory: "Супер спорт",
            safetyOptions: "Антиблокираща система",
            interiorOptions: "Кожен салон",
            region: "София",
            town: "Нови Искър",
            power: 540,
            transmission: "Автоматична",
            extras: [
                "GPS система за проследяване",
                "Автоматичен контрол на стабилността",
                "Адаптивни предни светлини",
                "Антиблокираща система",
                "Ел. разпределяне на спирачното усилие",
                "Auto Start Stop function",
                "Bluetooth handsfree система",
                "Адаптивно въздушно окачване",
                "Безключово палене",
                "Бордкомпютър",
                "Централно заключване",
                "Теглич",
                "LED фарове",
                "Панорамен люк",
                "Контрол на налягането на гумите",
                "Кожен салон",
                "Каско",
                "Спойлери"
            ],
            isLiked: false,
            mainCategory: "Автомобили и Джипове",
            contacts: "Борислав Топалов, тел. 0889352226, гр. София ",
            id: 4
        },
        {
            autoData: "https://autodata24.com/audi/list",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQEBgTIcOSx7reTt7_Yo__IYWwpukUCO29ih4pdqz&s",
            make: "Audi",
            model: "R8",
            engine: "Бензинов",
            price: 135100,
            currency: "лв.",
            date: "2018",
            millage: "7000",
            color: "Бял",
            euro: "Евро 6",
            moreInfo: "Перфектен автомобил. Реални километри. Един собственик в Германия. Заслужава си да се види. Без коментар на цената!",
            vehicleCategory: "Супер спорт",
            safetyOptions: "Антиблокираща система",
            interiorOptions: "Кожен салон",
            region: "София",
            town: "гр.София",
            power: 605,
            transmission: "Автоматична",
            extras:
                [
                    "GPS система за проследяване",
                    "Автоматичен контрол на стабилността",
                    "Адаптивни предни светлини",
                    "Антиблокираща система",
                    "Ел. разпределяне на спирачното усилие",
                    "Auto Start Stop function",
                    "Bluetooth handsfree система",
                    "Адаптивно въздушно окачване",
                    "Безключово палене",
                    "Бордкомпютър",
                    "Централно заключване",
                    "Теглич",
                    "LED фарове",
                    "Панорамен люк",
                    "Контрол на налягането на гумите",
                    "Кожен салон",
                    "Каско",
                    "Спойлери"
                ],
            isLiked: false,
            mainCategory: "Автомобили и Джипове",
            contacts: "Борислав Топалов, тел. 0889352226, гр. София ",
            id: 5
        },
        {
            autoData: "https://autodata24.com/bmw/list",
            image: "https://cdna.artstation.com/p/assets/images/images/014/296/316/large/jonatas-franzen-bmw-m3-gtr-2005-hero-2.jpg?1543376937",
            make: "BMW",
            model: "M3",
            engine: "Бензинов",
            price: 99000,
            currency: "лв.",
            date: "2001",
            millage: "118000",
            color: "Син",
            euro: "Евро 6",
            moreInfo: "Перфектен автомобил. Реални километри. Един собственик в Германия. Заслужава си да се види. Без коментар на цената!",
            vehicleCategory: "Бегачки",
            safetyOptions: "Антиблокираща система",
            interiorOptions: "Кожен салон",
            region: "София",
            town: "Нови Искър",
            power: 450,
            transmission: "Автоматична",
            extras:
                [
                    "GPS система за проследяване",
                    "Автоматичен контрол на стабилността",
                    "Адаптивни предни светлини",
                    "Антиблокираща система",
                    "Ел. разпределяне на спирачното усилие",
                    "Auto Start Stop function",
                    "Bluetooth handsfree система",
                    "Адаптивно въздушно окачване",
                    "Безключово палене",
                    "Бордкомпютър",
                    "Централно заключване",
                    "Теглич",
                    "LED фарове",
                    "Панорамен люк",
                    "Контрол на налягането на гумите",
                    "Кожен салон",
                    "Каско",
                    "Спойлери"
                ],
            isLiked: false,
            mainCategory: "Автомобили и Джипове",
            contacts: "Борислав Топалов, тел. 0889352226, гр. София ",
            id: 6
        }
    ];

    return ({ defaultCarsAndJeeps });
}