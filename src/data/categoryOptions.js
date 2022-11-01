export default function CategoryOptions() {

    const categorieOptions = [
        {
            value: "Автомобили и Джипове",
            label: "Автомобили и Джипове",
            id: 1,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Audi",
                    label: "Audi",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "A3", label: "A3", id: 2 },
                        { value: "RS E-Tron GT ", label: "RS E-Tron GT ", id: 3 },
                        { value: "RS3", label: "RS3", id: 4 },
                        { value: "RS4", label: "RS4", id: 5 },
                        { value: "S8", label: "S8", id: 6 },
                        { value: "RS6", label: "RS6", id: 7 },
                        { value: "R8", label: "R8", id: 8 },
                        { value: "RSQ8", label: "RSQ8", id: 9 }
                    ]
                },
                {
                    value: "BMW",
                    label: "BMW",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "M1", label: "M1", id: 2 },
                        { value: "M3", label: "M3", id: 3 },
                        { value: "M4", label: "M4", id: 4 },
                        { value: "M5", label: "M5", id: 5 },
                        { value: "i8", label: "i8", id: 6 },
                        { value: "M8", label: "M8", id: 7 },
                        { value: "MX6", label: "MX6", id: 8 }
                    ]
                },
                {
                    value: "Citroen",
                    label: "Citroen",
                    id: 4,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "C1", label: "C1", id: 2 },
                        { value: "C-Crosser", label: "C-Crosser", id: 3 },
                        { value: "C3", label: "C3", id: 4 },
                        { value: "C5", label: "C5", id: 5 },
                        { value: "C6", label: "C6", id: 6 },
                    ]
                },
                {
                    value: "Mazda",
                    label: "Mazda",
                    id: 5,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "3", label: "3", id: 2 },
                        { value: "6", label: "6", id: 3 },
                        { value: "MX3", label: "MX3", id: 4 },
                        { value: "MX5", label: "MX5", id: 5 },
                        { value: "CX3", label: "CX3", id: 6 },
                        { value: "Cx5", label: "CX5", id: 7 },
                    ]
                },
                {
                    value: "Mercedes-Benz",
                    label: "Mercedes-Benz",
                    id: 6,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "A 45 AMG", label: "A 45 AMG", id: 2 },
                        { value: "C 63 AMG", label: "C 63 AMG", id: 3 },
                        { value: "E 65 AMG", label: "E 65 AMG", id: 4 },
                        { value: "S 65 AMG", label: "S 65 AMG", id: 5 },
                        { value: "SLS AMG", label: "SLS AMG", id: 6 },
                        { value: "Maybach", label: "Maybach", id: 7 },
                        { value: "G 65 AMG", label: "G 65 AMG", id: 8 }
                    ]
                },
                {
                    value: "Opel",
                    label: "Opel",
                    id: 7,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Adam", label: "Adam", id: 2 },
                        { value: "Astra", label: "Astra", id: 3 },
                        { value: "Corsa", label: "Corsa", id: 4 },
                        { value: "Insignia", label: "Insignia", id: 5 },
                        { value: "Zafira", label: "Zafira", id: 6 },
                    ]
                },
                {
                    value: "Peugeot",
                    label: "Peugeot",
                    id: 8,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "108", label: "108", id: 2 },
                        { value: "208", label: "208", id: 3 },
                        { value: "508", label: "508", id: 4 },
                        { value: "1009", label: "1009", id: 5 },
                        { value: "Bipper", label: "Bipper", id: 6 },
                    ]
                },
                {
                    value: "Reanult",
                    label: "Reanult",
                    id: 9,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Capture", label: "Capture", id: 2 },
                        { value: "Clio", label: "Clio", id: 3 },
                        { value: "Kangoo", label: "Kangoo", id: 4 },
                        { value: "Megane", label: "Megane", id: 5 },
                        { value: "Laguna", label: "Laguna", id: 6 },
                    ]
                },
                {
                    value: "Toyota",
                    label: "Toyota",
                    id: 10,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Aygo", label: "Aygo", id: 2 },
                        { value: "Corolla", label: "Corolla", id: 3 },
                        { value: "Avensis", label: "Avensis", id: 4 },
                        { value: "RAV4", label: "RAV4", id: 5 },
                        { value: "Land Cruiser", label: "Land Cruiser", id: 6 },
                        { value: "Sequoia", label: "Sequoia", id: 7 },
                    ]
                },
            ]
        },
        {
            value: "Бусове", label: "Бусове", id: 2,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Mercedes",
                    label: "Mercedes",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "V-class", label: "V-class", id: 2 },
                        { value: "Vito", label: "Vito", id: 3 }
                    ]
                },
                {
                    value: "VW",
                    label: "VW",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Transporter", label: "Transporter", id: 2 },
                        { value: "T2", label: "T2", id: 3 }
                    ]
                },
                {
                    value: "Peugeot",
                    label: "Peugeot",
                    id: 4,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Boxer", label: "Boxer", id: 2 },
                        { value: "Expert", label: "Expert", id: 3 }
                    ]
                },
                {
                    value: "Citroen",
                    label: "Citroen",
                    id: 5,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Jumper", label: "Jumper", id: 2 },
                        { value: "Jumpy", label: "Jumpy", id: 3 }
                    ]
                },
                {
                    value: "Fiat",
                    label: "Fiat",
                    id: 6,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Ducato", label: "Ducato", id: 2 },
                        { value: "Fiorino", label: "Fiorino", id: 3 }
                    ]
                }
            ]
        },
        {
            value: "Камиони", label: "Камиони", id: 3,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Mercedes",
                    label: "Mercedes",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Unimog", label: "Unimog", id: 2 },
                        { value: "Actros", label: "Actros", id: 3 }
                    ]
                },
                {
                    value: "Volvo",
                    label: "Volvo",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "F 10", label: "F 10", id: 2 },
                        { value: "F 12", label: "F 12", id: 3 },
                        { value: "FH", label: "FH", id: 4 },
                    ]
                }
            ]
        },
        {
            value: "Мотоциклети", label: "Мотоциклети", id: 4,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Ducati",
                    label: "Ducati",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Diavel", label: "Diavel", id: 2 },
                        { value: "Monster", label: "Monster", id: 3 },
                        { value: "Panigale", label: "Panigale", id: 4 }
                    ]
                },
                {
                    value: "BMW",
                    label: "BMW",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "HP", label: "HP", id: 2 },
                        { value: "R", label: "R", id: 3 }
                    ]
                }
            ]
        },
        {
            value: "Селскостопански", label: "Селскостопански", id: 5,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Трактор",
                    label: "Трактор",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "CASE II", label: "CASE II", id: 2 },
                        { value: "Challenger", label: "Challenger", id: 3 }
                    ]
                },
                {
                    value: "Комбайн",
                    label: "Комбайн",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Lamborghini", label: "Lamborghini", id: 2 },
                        { value: "Mercedes-Benz", label: "Mercedes-Benz", id: 3 }
                    ]
                }
            ]
        },
        {
            value: "Каравани", label: "Каравани", id: 6,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Каравана",
                    label: "Каравана",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Bavaria Camp", label: "Bavaria Camp", id: 2 },
                        { value: "Westfallia", label: "Westfallia", id: 3 }
                    ]
                },
                {
                    value: "Кемпер",
                    label: "Кемпер",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Monaco", label: "Monaco", id: 2 },
                        { value: "Rockwood", label: "Rockwood", id: 3 }
                    ]
                }
            ]
        },
        {
            value: "Яхти и лодки", label: "Яхти и лодки", id: 7,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Джет",
                    label: "Джет",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Bomradier Sea Doo", label: "Bomradier Sea Doo", id: 2 },
                        { value: "Williams", label: "Williams", id: 3 }
                    ]
                },
                {
                    value: "Моторна яхта",
                    label: "Моторна яхта",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Lamborghini", label: "Lamborghini", id: 2 },
                        { value: "Ferrari", label: "Ferrari", id: 3 }
                    ]
                }
            ]
        },
        {
            value: "Продавам", label: "Продавам", id: 8,
            make: [
                { value: "Всички", label: "Всички", id: 1, model: [{ value: "Всички", label: "Всички", id: 1 }] },
                {
                    value: "Генерация",
                    label: "Генерация",
                    id: 2,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "Acrapovich", label: "Acrapovich", id: 2 },
                        { value: "Supersprint", label: "Supersprint", id: 3 }
                    ]
                },
                {
                    value: "Оптичен тунинг",
                    label: "Оптичен тунинг",
                    id: 3,
                    model: [
                        { value: "Всички", label: "Всички", id: 1 },
                        { value: "M-Power", label: "M-Power", id: 2 },
                        { value: "RS", label: "RS", id: 3 },
                        { value: "AMG", label: "AMG", id: 4 },
                    ]
                }
            ]
        },

    ];

    return ({ categorieOptions });
}