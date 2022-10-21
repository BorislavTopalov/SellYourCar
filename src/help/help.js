import "./help.scss";

export default function Help() {

    return (

        <div>
            <h4>Помощ</h4>
            <div className="helpsUnderline"></div>
            <ol>
                <li><strong>Как да Публикувам Обява в mobile.bg?</strong> </li>
                <p>В mobile.bg Вие може да публикувате обява за Автомобили и Джипове, Пикапи, Бусове, Камиони, Мотоциклети или Малки обяви/Части...

                    Обява може да бъде публикувана, както с направена регистрация в сайта, така и без регистрация.
                    И в двата случая ще получите 4 цифрен ключ за верификация /потвърждение/ на Вашия телефонен номер.

                    След като публикувате обявата, без да ползвате регистрация и в последствие си направите такава, всяка една обява извън профилът Ви, може да бъде присвоена към него, следвайки имструкциите в сайта.

                    За да публикувате обява, изберете от менюто най-горе типа на продаваното от Вас превозно средство (Автомобили и Джипове, Камион, Бус...) и натиснете бутона ПУБЛИКУВАНЕ.

                    Попълнете полетата за описание и натиснете бутона "ПУБЛИКУВАЙ".
                    Ще получите 4 цифрен ключ за верификация като SMS на Вашия телефон, който трябва да въведете в полето "Ключ" и след това да кликнете върху бутона "ПОТВЪРДИ".
                    Вашата Обява вече е на разположение на останалите потребители на mobile.bg!

                    След като публикувате обявата, се зарежда екран с данните въведени в обявата.
                    Прегледайте внимателно данните в обявата която сте публикували, и ако има нужда от корекции натиснете бутона "ПРОМЕНИ ТЕКСТА".
                    Ако желаете да добавите снимки, натиснете бутона "ДОБАВИ СНИМКА".</p>
                <li><strong>Как да Променя вече публикувана Обява в mobile.bg?</strong> </li>
                <p>Kликнете върху бутона "РЕДАКЦИЯ НА ОБЯВА" в горния десен ъгъл или върху линка "Редакция на обява", намиращ се в таблицата "Вход за потребители и дилъри".

                    1. Ако обявата е публикувана без регистрация, въведете Вашия телефонен номер в полето "Мобилен телефон" и натиснете бутона "Продължи".
                    Ако редактирате обявата си от същото устройство, от което е публиквана ще видите списъка с публикуваните от Вас обяви.
                    Ако редактирате обявата си от друго устройство, ще получите 4 цифрен ключ за верификация чрез SMS на Вашия телефон, който трябва да въведете в съответното поле и да натиснете бутона "Потвърди". След това ще видите списъка с публикуваните от Вас обяви.

                    2. Ако обявата Ви е публикувана през Ваш профил, последвайте линка "ВХОД".
                    Логнете се във Вашия профил ще видите списъка с публикуваните от Вас обяви.

                    Намерете обявата, която искате да коригирате или изтриете и изберете съответната опция.
                </p>
                <li><strong>Как да удължа срока на изтичаща обява в mobile.bg?</strong> </li>
                <p>Намерете Вашата обява като следвате инструкциите от т.3.

                    1. Ако сте публикували обявата като Нерегистриран потребител може да удължите срока на обявата безплатно,
                    като зададете нов срок на Валидност, но само в случай, че срока не е удължаван през последните 14 дни.

                    2. Ако сте публикували обявата като Регистриран потребител може да удължите срока на обявата безплатно,
                    като зададете нов срок на Валидност, но само в случай, че срока не е удължаван през последните 14 дни.
                    В случай, че срока е удължаван през последните 14 дни може да се възползвате от платено обновяване, като кликнете върху линка "Обнови за 60 ст."
                    към всяка обява в списъка с Вашите обяви.</p>
            </ol>

        </div>
    )
}