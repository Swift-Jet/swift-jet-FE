import LocationAndMapLocationPin1 from "./assets/LocationAndMapLocationPin1";
import BusinessCalendar from "./assets/BusinessCalendar";
import BusinessCalendar1 from "./assets/BusinessCalendar1";
import UsersAccount from "./assets/UsersAccount";
import LocationAndMapLocationPin from "./assets/LocationAndMapLocationPin";
import "./styles.css"
export default function FieldBooking(props) {
  return (
    <>
      <div className="w-full text-left font-Aeonik text-rgba(77,77,77,1) field-booking">
        <div className="px-4 h-16 pt-1 pb-0.5 relative bg-white border-solid border gap-0.5 flex flex-col items-start rounded-lg w-243.1999969482422px border-rgba(77,77,77,1) field-booking-inner">
          <p className="m-0 text-xs font-medium leading-normal">
            {props.text}
          </p>
          <div className="flex items-center self-stretch justify-between w-full font-normal">
            <p className="m-0 text-base leading-normal">{props.text1}</p>
            {props.type === "DEFAULT_TYPE1" && <LocationAndMapLocationPin1 />}
            {props.type === "DEFAULT_TYPE2" && <BusinessCalendar />}
            {props.type === "DEFAULT_TYPE3" && <BusinessCalendar1 />}
            {props.type === "DEFAULT_TYPE4" && <UsersAccount />}
            {props.type === "DEFAULT_TYPE" && <LocationAndMapLocationPin />}
          </div>
        </div>
      </div>
    </>
  );
}

FieldBooking.defaultProps = {
  type: "DEFAULT_TYPE",
  text: "From Where",
  text1: "City or Airport"
};
