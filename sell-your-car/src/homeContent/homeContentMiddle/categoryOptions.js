export default function CategoryOptions() {

    const categorieOptions = [
        {
            value: "Автомобили и Джипове",
            label: "Автомобили и Джипове",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Audi",
                    label: "Audi",
                    model: [
                        { value: "", label: "" },
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
                        { value: "", label: "" },
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
                    value: "Mercedes-Benz",
                    label: "Mercedes-Benz",
                    model: [
                        { value: "", label: "" },
                        { value: "A 45 AMG", label: "A 45 AMG" },
                        { value: "C 63 AMG", label: "C 63 AMG" },
                        { value: "E 65 AMG", label: "E 65 AMG" },
                        { value: "S 65 AMG", label: "S 65 AMG" },
                        { value: "SLS AMG", label: "SLS AMG" },
                        { value: "Maybach", label: "Maybach" },
                        { value: "G 65 AMG", label: "G 65 AMG" }
                    ]
                }
            ]
        },
        {
            value: "Бусове", label: "Бусове",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Mercedes",
                    label: "Mercedes",
                    model: [
                        { value: "", label: "" },
                        { value: "V-class", label: "V-class" },
                        { value: "Vito", label: "Vito" }
                    ]
                },
                {
                    value: "VW",
                    label: "VW",
                    model: [
                        { value: "", label: "" },
                        { value: "Transporter", label: "Transporter" },
                        { value: "T2", label: "T2" }
                    ]
                }
            ]
        },
        {
            value: "Камиони", label: "Камиони",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Mercedes",
                    label: "Mercedes",
                    model: [
                        { value: "", label: "" },
                        { value: "Unimog", label: "Unimog" },
                        { value: "Actros", label: "Actros" }
                    ]
                },
                {
                    value: "Volvo",
                    label: "Volvo",
                    model: [
                        { value: "", label: "" },
                        { value: "F 10", label: "F 10" },
                        { value: "F 12", label: "F 12" }
                    ]
                }
            ]
        },
        {
            value: "Мотоциклети", label: "Мотоциклети",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Ducati",
                    label: "Ducati",
                    model: [
                        { value: "", label: "" },
                        { value: "Diavel", label: "Diavel" },
                        { value: "Panigale", label: "Panigale" }
                    ]
                },
                {
                    value: "BMW",
                    label: "BMW",
                    model: [
                        { value: "", label: "" },
                        { value: "HP", label: "HP" },
                        { value: "R", label: "R" }
                    ]
                }
            ]
        },
        {
            value: "Селскостопански", label: "Селскостопански",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Трактор",
                    label: "Трактор",
                    model: [
                        { value: "", label: "" },
                        { value: "CASE II", label: "CASE II" },
                        { value: "Challenger", label: "Challenger" }
                    ]
                },
                {
                    value: "Комбайн",
                    label: "Комбайн",
                    model: [
                        { value: "", label: "" },
                        { value: "Lamborghini", label: "Lamborghini" },
                        { value: "Mercedes-Benz", label: "Mercedes-Benz" }
                    ]
                }
            ]
        },
        {
            value: "Велосипеди", label: "Велосипеди",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "BMX",
                    label: "BMX",
                    model: [
                        { value: "", label: "" },
                        { value: "Cadillac Bikes", label: "Cadillac Bikes" },
                        { value: "Diamond Bikes", label: "Diamond Bikes" }
                    ]
                },
                {
                    value: "Планински",
                    label: "Планински",
                    model: [
                        { value: "", label: "" },
                        { value: "Brookline Mashineworks", label: "Brookline Mashineworks" },
                        { value: "Specialized", label: "Specialized" }
                    ]
                }
            ]
        },
        {
            value: "Каравани", label: "Каравани",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Каравана",
                    label: "Каравана",
                    model: [
                        { value: "", label: "" },
                        { value: "Bavaria Camp", label: "Bavaria Camp" },
                        { value: "Westfallia", label: "Westfallia" }
                    ]
                },
                {
                    value: "Кемпер",
                    label: "Кемпер",
                    model: [
                        { value: "", label: "" },
                        { value: "Monaco", label: "Monaco" },
                        { value: "Rockwood", label: "Rockwood" }
                    ]
                }
            ]
        },
        {
            value: "Яхти и лодки", label: "Яхти и лодки",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Джет",
                    label: "Джет",
                    model: [
                        { value: "", label: "" },
                        { value: "Bomradier Sea Doo", label: "Bomradier Sea Doo" },
                        { value: "Williams", label: "Williams" }
                    ]
                },
                {
                    value: "Моторна яхта",
                    label: "Моторна яхта",
                    model: [
                        { value: "", label: "" },
                        { value: "Lamborghini", label: "Lamborghini" },
                        { value: "Ferrari", label: "Ferrari" }
                    ]
                }
            ]
        },
        {
            value: "Продавам", label: "Продавам",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Генерация",
                    label: "Генерация",
                    model: [
                        { value: "", label: "" },
                        { value: "Acrapovich", label: "Acrapovich" },
                        { value: "Supersprint", label: "Supersprint" }
                    ]
                },
                {
                    value: "Оптичен тунинг",
                    label: "Оптичен тунинг",
                    model: [
                        { value: "", label: "" },
                        { value: "M-Power", label: "M-Power" },
                        { value: "RS", label: "RS" },
                        { value: "AMG", label: "AMG" },
                    ]
                }
            ]
        },
        {
            value: "Части и аксесоари", label: "Части и аксесоари",
            make: [
                { value: "", label: "", model: [] },
                {
                    value: "Автомобили",
                    label: "Автомобили",
                    model: [
                        { value: "", label: "" },
                        { value: "Двигател", label: "Двигател" },
                        { value: "Трансмисия", label: "Трансмисия" }
                    ]
                },
                {
                    value: "Джипове",
                    label: "Джипове",
                    model: [
                        { value: "", label: "" },
                        { value: "Двигател", label: "Двигател" },
                        { value: "Трансмисия", label: "Трансмисия" }
                    ]
                }
            ]
        }
    ];

    return ({ categorieOptions });
}