export default function EngineOptions() {

    const engine = [
        { value: "Всички", label: "Всички", id: 1 },
        { value: "Бензинов", label: "Бензинов", id: 2 },
        { value: "Дизелов", label: "Дизелов", id: 3 },
        { value: "Електрически", label: "Електрически", id: 4 }
    ];

    return ({ engine });
}