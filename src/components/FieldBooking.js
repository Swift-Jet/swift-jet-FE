
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';



export default function FieldBooking() {
	return (
		<div className="w-full text-left font-poppins field-booking items-center">
			<div className="px-4 h-16 pt-1 pb-0.5 relative  gap-0.5 items-start rounded-lg w-243.1999969482422px border-rgba(77,77,77,1) field-booking-inner">
				<div class="warpper">
					<input class="radio" id="one" name="group" type="radio" />
					<input class="radio" id="two" name="group" type="radio" />
					<input class="radio" id="three" name="group" type="radio" />
					<div class="tabs grid gap-0 grid-rows lg:grid-cols-3 bg-white rounded-md p-2 ">
						<label class="tab text-rose-900 bg-transparent hover:bg-rose-900 text-rose-900 font-semibold hover:text-white py-1 px-5 border border-rose-900 hover:border-transparent rounded" id="one-tab" for="one"><FlightTakeoffOutlinedIcon className="mr-2" /> One Way</label>
						<label class="tab text-rose-900 bg-transparent hover:bg-rose-900 text-rose-900 font-semibold hover:text-white py-1 px-5 border border-rose-900 hover:border-transparent rounded" id="two-tab" for="two"><FlightTakeoffOutlinedIcon className="mr-2" /> Round Trip</label>
						<label class="tab text-rose-900 bg-transparent hover:bg-rose-900 text-rose-900 font-semibold hover:text-white py-1 px-5 border border-rose-900 hover:border-transparent rounded" id="three-tab" for="three"><FlightTakeoffOutlinedIcon className="mr-2" /> Multi City</label>
					</div>
					<div class="panels">
						<div class="panel" id="one-panel">
							<div class="panel-title"></div>
							<div className='grid grid-row lg: grid-cols-5 gap-1'>
								<div>03333331</div>
								<div>02</div>
								<div>03</div>
								<div>04</div>
								<div>05</div>
							</div>
						</div>
						<div class="panel" id="two-panel">
							<div class="panel-title"></div>
							<p></p>
						</div>
						<div class="panel" id="three-panel">
							<div class="panel-title"></div>
							<p></p>
						</div>
					</div>
				</div>
    </div>
</div>

 );
}
