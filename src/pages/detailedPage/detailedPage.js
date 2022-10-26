import { useParams } from "react-router-dom";
import DetailedCard from "../../components/DetailedCard";
import DefaultAds from "../../data/defaultAds";
import "./detailedPage.scss";

export default function DetailedPage() {
    
   let {id} = useParams();

    return (

        <div>
            {
                DefaultAds().defaultCarsAndJeeps.filter(list => list.id === Number(id))
                .map(item =>
                    <DetailedCard
                        autoData={item.autoData}
                        src={item.image}
                        make={item.make}
                        model={item.model}
                        price={item.price}
                        date={item.date}
                        engine={item.engine}
                        power={item.power}
                        euro={item.euro}
                        transmission={item.transmission}
                        vehicleCategory={item.vehicleCategory}
                        millage={item.millage}
                        color={item.color}
                        gps={item.gps}
                        stability={item.stability}
                        adaptLight={item.adaptLight}
                        abs={item.abs}
                        tyrePresure={item.tyrePresure}
                        parktronik={item.parktronik}
                        brakeAsisst={item.brakeAsisst}
                        startStop={item.startStop}
                        bluetooth={item.bluetooth}
                        usb={item.usb}
                        airmatic={item.airmatic}
                        keyless={item.keyless}
                        bordComp={item.bordComp}
                        heatingWheel={item.heatingWheel}
                        armored={item.armored}
                        forcedGlass={item.forcedGlass}
                        centralLock={item.centralLock}
                        offroad={item.offroad}
                        alarm={item.alarm}
                        insurance={item.insurance}
                        winch={item.winch}
                        towTruck={item.towTruck}
                        led={item.led}
                        panorama={item.panorama}
                        spoilers={item.spoilers}
                        heatWasher={item.heatWasher}
                        xenon={item.xenon}
                        roofWindow={item.roofWindow}
                        velur={item.velur}
                        rigthDirection={item.rigthDirection}
                        leather={item.leather}
                        taxi={item.taxi}
                        specialCar={item.specialCar}
                        hearse={item.hearse}
                        ambulance={item.ambulance}
                        schoolCar={item.schoolCar}
                        refrigerator={item.refrigerator}
                        n1={item.n1}
                        moreInfo={item.moreInfo}
                        contacts={item.contacts}
                        key={item.id}
                    />
                )
            }
        </div>
    )
}