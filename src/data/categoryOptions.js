export default function CategoryOptions() {

    const categorieOptions = [
        {
            value: "Автомобили и Джипове",
            label: "Автомобили и Джипове",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Audi",
                    label: "Audi",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "A3", label: "A3" },
                        { value: "RS E-Tron GT ", label: "RS E-Tron GT " },
                        { value: "RS3", label: "RS3" },
                        { value: "RS4", label: "RS4" },
                        { value: "S8", label: "S8" },
                        { value: "RS6", label: "RS6" },
                        { value: "R8", label: "R8" },
                        { value: "RSQ8", label: "RSQ8" }
                    ]
                },
                {
                    value: "BMW",
                    label: "BMW",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "M1", label: "M1" },
                        { value: "M3", label: "M3" },
                        { value: "M4", label: "M4" },
                        { value: "M5", label: "M5" },
                        { value: "i8", label: "i8" },
                        { value: "M8", label: "M8" },
                        { value: "MX6", label: "MX6" }
                    ]
                },
                {
                    value: "Citroen",
                    label: "Citroen",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "C1", label: "C1" },
                        { value: "C-Crosser", label: "C-Crosser" },
                        { value: "C3", label: "C3" },
                        { value: "C5", label: "C5" },
                        { value: "C6", label: "C6" },                       
                    ]
                },
                {
                    value: "Mazda",
                    label: "Mazda",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "3", label: "3" },
                        { value: "6", label: "6" },
                        { value: "MX3", label: "MX3" },
                        { value: "MX5", label: "MX5" },
                        { value: "CX3", label: "CX3" },
                        { value: "Cx5", label: "CX5" },
                    ]
                },
                {
                    value: "Mercedes-Benz",
                    label: "Mercedes-Benz",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "A 45 AMG", label: "A 45 AMG" },
                        { value: "C 63 AMG", label: "C 63 AMG" },
                        { value: "E 65 AMG", label: "E 65 AMG" },
                        { value: "S 65 AMG", label: "S 65 AMG" },
                        { value: "SLS AMG", label: "SLS AMG" },
                        { value: "Maybach", label: "Maybach" },
                        { value: "G 65 AMG", label: "G 65 AMG" }
                    ]
                },
                {
                    value: "Opel",
                    label: "Opel",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Adam", label: "Adam" },
                        { value: "Astra", label: "Astra" },
                        { value: "Corsa", label: "Corsa" },
                        { value: "Insignia", label: "Insignia" },
                        { value: "Zafira", label: "Zafira" },                       
                    ]
                },
                {
                    value: "Peugeot",
                    label: "Peugeot",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "108", label: "108" },
                        { value: "208", label: "208" },
                        { value: "508", label: "508" },
                        { value: "1009", label: "1009" },
                        { value: "Bipper", label: "Bipper" },                       
                    ]
                },
                {
                    value: "Reanult",
                    label: "Reanult",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Capture", label: "Capture" },
                        { value: "Clio", label: "Clio" },
                        { value: "Kangoo", label: "Kangoo" },
                        { value: "Megane", label: "Megane" },
                        { value: "Laguna", label: "Laguna" },                       
                    ]
                },
                {
                    value: "Toyota",
                    label: "Toyota",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Aygo", label: "Aygo" },
                        { value: "Corolla", label: "Corolla" },
                        { value: "Avensis", label: "Avensis" },
                        { value: "RAV4", label: "RAV4" },
                        { value: "Land Cruiser", label: "Land Cruiser" },
                        { value: "Sequoia", label: "Sequoia" },
                    ]
                },
            ]
        },
        {
            value: "Бусове", label: "Бусове",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Mercedes",
                    label: "Mercedes",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "V-class", label: "V-class" },
                        { value: "Vito", label: "Vito" }
                    ]
                },
                {
                    value: "VW",
                    label: "VW",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Transporter", label: "Transporter" },
                        { value: "T2", label: "T2" }
                    ]
                }
            ]
        },
        {
            value: "Камиони", label: "Камиони",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Mercedes",
                    label: "Mercedes",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Unimog", label: "Unimog" },
                        { value: "Actros", label: "Actros" }
                    ]
                },
                {
                    value: "Volvo",
                    label: "Volvo",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "F 10", label: "F 10" },
                        { value: "F 12", label: "F 12" }
                    ]
                }
            ]
        },
        {
            value: "Мотоциклети", label: "Мотоциклети",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Ducati",
                    label: "Ducati",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Diavel", label: "Diavel" },
                        { value: "Panigale", label: "Panigale" }
                    ]
                },
                {
                    value: "BMW",
                    label: "BMW",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "HP", label: "HP" },
                        { value: "R", label: "R" }
                    ]
                }
            ]
        },
        {
            value: "Селскостопански", label: "Селскостопански",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Трактор",
                    label: "Трактор",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "CASE II", label: "CASE II" },
                        { value: "Challenger", label: "Challenger" }
                    ]
                },
                {
                    value: "Комбайн",
                    label: "Комбайн",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Lamborghini", label: "Lamborghini" },
                        { value: "Mercedes-Benz", label: "Mercedes-Benz" }
                    ]
                }
            ]
        },
        {
            value: "Каравани", label: "Каравани",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Каравана",
                    label: "Каравана",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Bavaria Camp", label: "Bavaria Camp" },
                        { value: "Westfallia", label: "Westfallia" }
                    ]
                },
                {
                    value: "Кемпер",
                    label: "Кемпер",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Monaco", label: "Monaco" },
                        { value: "Rockwood", label: "Rockwood" }
                    ]
                }
            ]
        },
        {
            value: "Яхти и лодки", label: "Яхти и лодки",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Джет",
                    label: "Джет",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Bomradier Sea Doo", label: "Bomradier Sea Doo" },
                        { value: "Williams", label: "Williams" }
                    ]
                },
                {
                    value: "Моторна яхта",
                    label: "Моторна яхта",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Lamborghini", label: "Lamborghini" },
                        { value: "Ferrari", label: "Ferrari" }
                    ]
                }
            ]
        },
        {
            value: "Продавам", label: "Продавам",
            make: [
                { value: "Всички", label: "Всички", model: [{ value: "Всички", label: "Всички" }] },
                {
                    value: "Генерация",
                    label: "Генерация",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "Acrapovich", label: "Acrapovich" },
                        { value: "Supersprint", label: "Supersprint" }
                    ]
                },
                {
                    value: "Оптичен тунинг",
                    label: "Оптичен тунинг",
                    model: [
                        { value: "Всички", label: "Всички" },
                        { value: "M-Power", label: "M-Power" },
                        { value: "RS", label: "RS" },
                        { value: "AMG", label: "AMG" },
                    ]
                }
            ]
        },
        
    ];

    return ({ categorieOptions });
}