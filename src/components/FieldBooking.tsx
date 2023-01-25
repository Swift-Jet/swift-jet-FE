import LocationAndMapLocationPin1 from "assets/LocationAndMapLocationPin1.tsx";
import BusinessCalendar from "assets/BusinessCalendar.tsx";
import BusinessCalendar1 from "assets/BusinessCalendar1.tsx";
import UsersAccount from "assets/UsersAccount.tsx";
import LocationAndMapLocationPin from "assets/LocationAndMapLocationPin.tsx";

export default function FieldBooking(props: FieldBookingProps) {
  return (
    <>
      <div
        className={`w-full text-left font-['Aeonik'] text-[rgba(77,77,77,1)]`}
      >
        <div
          className="px-4 h-16 pt-1 pb-0.5 relative bg-white border-solid border gap-0.5 flex flex-col items-start rounded-lg w-[243.1999969482422px] border-[rgba(77,77,77,1)]"
        >
          <p className="text-xs font-medium m-0 leading-[normal]">
            {props.text}
          </p>
          <div
            className="flex items-center self-stretch justify-between w-full font-normal"
          >
            <p className="text-base m-0 leading-[normal]">{props.text1}</p>
            {props.type === "DEFAULT_TYPE1" && (
              <LocationAndMapLocationPin1 />
            )}
            {props.type === "DEFAULT_TYPE2" && (
              <BusinessCalendar />
            )}
            {props.type === "DEFAULT_TYPE3" && (
              <BusinessCalendar1 />
            )}
            {props.type === "DEFAULT_TYPE4" && <UsersAccount />}
            {props.type === "DEFAULT_TYPE" && (
              <LocationAndMapLocationPin />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

FieldBooking.defaultProps = {
  type: "DEFAULT_TYPE",
  text: "From Where",
  text1: "City or Airport",
};

interface FieldBookingProps {
  type:
    | "DEFAULT_TYPE"
    | "DEFAULT_TYPE1"
    | "DEFAULT_TYPE2"
    | "DEFAULT_TYPE3"
    | "DEFAULT_TYPE4";
  text: string;
  text1: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
