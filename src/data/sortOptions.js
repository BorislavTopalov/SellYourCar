export default function SortOptions() {

    const sortOptions = [
        { value: "Марка/Модел/Цена", label: "Марка/Модел/Цена", id: 1 },
        { value: "Цена", label: "Цена", id: 2 },
        { value: "Година", label: "Година", id: 3 },
        { value: "Пробег", label: "Пробег", id: 4 }
    ];

    return ({ sortOptions });
}