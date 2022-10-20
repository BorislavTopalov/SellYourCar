import carsLogo from "../../data/iconsHomePage/icons/cars.png";
import busLogo from "../../data/iconsHomePage/icons/bus.png";
import truckLogo from "../../data/iconsHomePage/icons/truck.png";
import motoLogo from "../../data/iconsHomePage/icons/moto.png";
import tracktorLogo from "../../data/iconsHomePage/icons/tracktor.png";
import bicycleLogo from "../../data/iconsHomePage/icons/bicycle.png";
import caravanLogo from "../../data/iconsHomePage/icons/caravan.png";
import boatLogo from "../../data/iconsHomePage/icons/boat.png";
import sellsLogo from "../../data/iconsHomePage/icons/sells.png";
import toolsLogo from "../../data/iconsHomePage/icons/tools.png";

export default function IconsShow() {

    const iconsArr = [
        carsLogo, busLogo, truckLogo, motoLogo, tracktorLogo,
        bicycleLogo, caravanLogo, boatLogo, sellsLogo, toolsLogo
    ];

    return ({iconsArr});
}