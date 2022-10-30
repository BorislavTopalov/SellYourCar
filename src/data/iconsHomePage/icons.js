import carsLogo from "../../data/iconsHomePage/icons/cars.png";
import busLogo from "../../data/iconsHomePage/icons/bus.png";
import truckLogo from "../../data/iconsHomePage/icons/truck.png";
import motoLogo from "../../data/iconsHomePage/icons/moto.png";
import tracktorLogo from "../../data/iconsHomePage/icons/tracktor.png";
import caravanLogo from "../../data/iconsHomePage/icons/caravan.png";
import boatLogo from "../../data/iconsHomePage/icons/boat.png";
import sellsLogo from "../../data/iconsHomePage/icons/sells.png";

export default function IconsShow() {

    const iconsArr = [
        { img: carsLogo, value: "Автомобили и Джипове" },
        { img: busLogo, value: "Бусове" },
        { img: truckLogo, value: "Камиони" },
        { img: motoLogo, value: "Мотоциклети" },
        { img: tracktorLogo, value: "Селскостопански" },
        { img: caravanLogo, value: "Каравани" },
        { img: boatLogo, value: "Яхти и лодки" },
        { img: sellsLogo, value: "Продавам" },
    ];

    return ({ iconsArr });
}