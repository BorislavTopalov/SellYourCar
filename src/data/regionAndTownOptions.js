export default function RegionAndTownOptions() {

    const regionAndTownOptions = [
        {
            value: "Всички",
            label: "Всички",
            town: [
                {
                    value: "Всички",
                    label: "Всички"
                }
            ]

        },
        {
            value: "Бургас",
            label: "Бургас",
            town: [
                {
                    value: "Всички",
                    label: "Всички"
                },
                {
                    value: "гр.Бургас",
                    label: "гр.Бургас"
                },
                {
                    value: "гр.Св.Влас",
                    label: "гр.Св.Влас"
                },
                {
                    value: "гр.Созопол",
                    label: "гр.Созопол"
                },
                {
                    value: "к.к.Слънчев бряг",
                    label: "к.к.Слънчев бряг"
                },
            ]

        },
        {
            value: "Варна",
            label: "Варна",
            town: [
                {
                    value: "Всички",
                    label: "Всички"
                },
                {
                    value: "гр.Варна",
                    label: "гр.Варна"
                },
                {
                    value: "гр.Балчик",
                    label: "гр.Балчик"
                },
                {
                    value: "к.к.Албена",
                    label: "к.к.Албена"
                },
                {
                    value: "к.к.Златни пясъци",
                    label: "к.к.Златни пясъци"
                },
            ]

        },
        {
            value: "Пловдив",
            label: "Пловдив",
            town: [
                {
                    value: "Всички",
                    label: "Всички"
                },
                {
                    value: "гр.Пловдив",
                    label: "гр.Пловдив"
                },
                {
                    value: "гр.Калофер",
                    label: "гр.Калофер"
                },
                {
                    value: "гр.Карлово",
                    label: "гр.Карлово"
                },
                {
                    value: "с.Васил Левски",
                    label: "с.Васил Левски"
                },
            ]

        },
        {
            value: "София",
            label: "София",
            town: [
                {
                    value: "Всички",
                    label: "Всички"
                },
                {
                    value: "гр.Банкя",
                    label: "гр.Банкя"
                },
                {
                    value: "гр.Нови Искър",
                    label: "гр.Нови Искър"
                },
                {
                    value: "гр.София",
                    label: "гр.София"
                },
                {
                    value: "с.Лозен",
                    label: "с.Лозен"
                },
            ]

        }
    ];

    return ({ regionAndTownOptions });
}