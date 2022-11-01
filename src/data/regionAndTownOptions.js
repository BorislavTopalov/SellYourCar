export default function RegionAndTownOptions() {

    const regionAndTownOptions = [
        {
            value: "Всички",
            label: "Всички",
            id: 1,
            town: [
                {
                    value: "Всички",
                    label: "Всички",
                    id: 1
                }
            ]

        },
        {
            value: "Бургас",
            label: "Бургас",
            id: 2,
            town: [
                {
                    value: "Всички",
                    label: "Всички",
                    id: 1
                },
                {
                    value: "гр.Бургас",
                    label: "гр.Бургас",
                    id: 2
                },
                {
                    value: "гр.Св.Влас",
                    label: "гр.Св.Влас",
                    id: 3
                },
                {
                    value: "гр.Созопол",
                    label: "гр.Созопол",
                    id: 4
                },
                {
                    value: "к.к.Слънчев бряг",
                    label: "к.к.Слънчев бряг",
                    id: 5
                },
            ]

        },
        {
            value: "Варна",
            label: "Варна",
            id: 3,
            town: [
                {
                    value: "Всички",
                    label: "Всички",
                    id: 1
                },
                {
                    value: "гр.Варна",
                    label: "гр.Варна",
                    id: 2
                },
                {
                    value: "гр.Балчик",
                    label: "гр.Балчик",
                    id: 3
                },
                {
                    value: "к.к.Албена",
                    label: "к.к.Албена",
                    id: 4
                },
                {
                    value: "к.к.Златни пясъци",
                    label: "к.к.Златни пясъци",
                    id: 5
                },
            ]

        },

        {
            value: "Смолян",
            label: "Смолян",
            id: 4,
            town: [
                {
                    value: "Всички",
                    label: "Всички",
                    id: 1
                },
                {
                    value: "гр.Доспат",
                    label: "гр.Доспат",
                    id: 2
                },
                {
                    value: "гр.Смолян",
                    label: "гр.Смолян",
                    id: 3
                },
                {
                    value: "гр.Девин",
                    label: "гр.Девин",
                    id: 4
                },
                {
                    value: "с.Смилян",
                    label: "с.Смилян",
                    id: 5
                },
            ]

        },
        {
            value: "София",
            label: "София",
            id: 5,
            town: [
                {
                    value: "Всички",
                    label: "Всички",
                    id: 1
                },
                {
                    value: "гр.Банкя",
                    label: "гр.Банкя",
                    id: 2
                },
                {
                    value: "гр.Нови Искър",
                    label: "гр.Нови Искър",
                    id: 3
                },
                {
                    value: "гр.София",
                    label: "гр.София",
                    id: 4
                },
                {
                    value: "с.Лозен",
                    label: "с.Лозен",
                    id: 5
                },
            ]

        }
    ];

    return ({ regionAndTownOptions });
}