import react from "react";
// // import "./font-awesome/css/all.min";
// import "../../..";
// import "./assets/vendor/choices/css/choices.min.css";
// import "./assets/vendor/flatpickr/css/flatpickr.min.css";
// import "./assets/css/styles.css";

export default function BookingEngineTest() {
 
  

  return (
    <body>
<main>
<section class="pt-0">
	
	<div class="container-fluid" style="background-image:url(assets/images/bg/08.jpg); background-position: center left; background-size: cover;">
		<div class="row">
		
			<div class="col-md-6 mx-auto text-center pt-7 pb-9">
				<h1 class="text-white"></h1>
				<p class="lead text-white mb-0"></p>
			</div>
		</div> 
	</div>

	
	<div class="container mt-n8">
		<div class="row">
			<div class="col-11 col-lg-8 col-xl-6 mx-auto">
				<ul class="nav nav-tabs nav-bottom-line nav-justified nav-responsive bg-mode rounded-top z-index-9 position-relative pt-2 pb-0 px-4">
					<li class="nav-item"> 
						<a class="nav-link mb-0 active" data-bs-toggle="tab" href="hero-multiple-search.html#tab-1-1"><i class="fa-solid fa-hotel fa-fw me-2"></i>Hotel</a> 
					</li>
					<li class="nav-item">
						<a class="nav-link mb-0" data-bs-toggle="tab" href="hero-multiple-search.html#tab-1-2"><i class="fa-solid fa-plane fa-fw me-2"></i>Flight</a> 
						</li>
					<li class="nav-item"> 
						<a class="nav-link mb-0" data-bs-toggle="tab" href="hero-multiple-search.html#tab-1-3"><i class="fa-solid fa-globe-americas fa-fw me-2"></i>Tour</a> 
					</li>	
				</ul>
			</div>	
			<div class="col-12">
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="tab-1-1">
						<form class="card shadow p-0">	
							<div class="card-header p-4">
								<h5 class="mb-0"><i class="fa-solid fa-hotel fa-fw me-2"></i>One way</h5>
							</div>
							<div class="card-body p-4 pt-0">
								<div class="row g-4">
									<div class="col-12">
										<div class="form-icon-input form-size-lg form-fs-lg">
											<select class="form-select js-choice" data-search-enabled="true">
												<option value="">Search hotel</option>
												<option>San Jacinto, USA</option>
												<option>North Dakota, Canada</option>
												<option>West Virginia, Paris</option>
											</select>
											<span class="form-icon"><i class="bi bi-search fs-5"></i></span>
										</div>
									</div>		
									<div class="col-lg-4">
										<div class="form-icon-input form-fs-lg">
											<div class="dropdown guest-selector me-2">
												<input type="text" class="form-guest-selector form-control form-control-lg selection-result" placeholder="Select occupant" data-bs-auto-close="outside" data-bs-toggle="dropdown"/>
												<ul class="dropdown-menu guest-selector-dropdown">
													<li class="d-flex justify-content-between">
														<div>
															<h6 class="mb-0">Adults</h6>
															<small>Ages 13 or above</small>
														</div>
														<div class="hstack gap-1 align-items-center">
															<button type="button" class="btn btn-link adult-remove p-0 mb-0"><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
															<h6 class="guest-selector-count mb-0 adults">2</h6>
															<button type="button" class="btn btn-link adult-add p-0 mb-0"><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
														</div>
													</li>	
													<li class="dropdown-divider"></li>
													<li class="d-flex justify-content-between">
														<div>
															<h6 class="mb-0">Child</h6>
															<small>Ages 13 below</small>
														</div>
														<div class="hstack gap-1 align-items-center">
															<button type="button" class="btn btn-link child-remove p-0 mb-0" ><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
															<h6 class="guest-selector-count mb-0 child">0</h6>
															<button type="button" class="btn btn-link child-add p-0 mb-0" ><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
														</div>
													</li>
													<li class="dropdown-divider"></li>
													<li class="d-flex justify-content-between">
														<div>
															<h6 class="mb-0">Rooms</h6>
															<small>Max room 8</small>
														</div>
														<div class="hstack gap-1 align-items-center">
															<button type="button" class="btn btn-link room-remove p-0 mb-0" ><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
															<h6 class="guest-selector-count mb-0 rooms">1</h6>
															<button type="button" class="btn btn-link room-add p-0 mb-0" ><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
														</div>
													</li>
												</ul>
											</div>
											<span class="form-icon"><i class="bi bi-people fs-5"></i></span>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="form-icon-input form-fs-lg">
											<input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/m/y" placeholder="Select check-in date"/>
											<span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="form-icon-input form-fs-lg">
											<input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/m/y" placeholder="Select check-out date"/>
											<span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
										</div>
									</div>
								</div> 
								<div class="text-center pt-0">
									<a class="btn btn-lg btn-primary mb-n7" href="hero-multiple-search.html#">Search Hotel <i class="bi bi-arrow-right ps-3"></i></a>
								</div>
							</div>
						</form>
					</div>
					

					
					<div class="tab-pane fade" id="tab-1-2">
						<form class="card shadow p-0">
							
							<div class="card-header p-4">
								<div class="row g-4 align-items-center">
									
									<div class="col-lg-4 col-xl-6">
										<h5 class="mb-0"><i class="fa-solid fa-plane fa-fw me-2"></i>Flight Booking</h5>
									</div>
								
									<div class="col-md-6 col-lg-4 col-xl-3 ms-auto">
										<div class="nav nav-pills" id="pills-tab" role="tablist">
											<div class="form-check form-check-inline active" id="flight-one-way-tab" data-bs-toggle="pill" data-bs-target="#flight-one-way" role="tab" aria-controls="flight-one-way" aria-selected="true">
												<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
												<label class="form-check-label" for="inlineRadio1">One Way</label>
											</div>
											<div class="form-check form-check-inline" id="flight-round-way-tab" data-bs-toggle="pill" data-bs-target="#flight-round-way" role="tab" aria-controls="flight-round-way" aria-selected="false">
												<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
												<label class="form-check-label" for="inlineRadio2">Round Trip</label>
											</div>
										</div>
									</div>
									
									<div class="col-md-6 col-lg-4 col-xl-3 ms-auto">
										<div class="form-control-bg-light border rounded form-fs-md">
											<select class="form-select js-choice" aria-label=".form-select-sm">
												<option value="">Select Class</option>
												<option>Economy</option>
												<option>Premium Economy</option>
												<option>Business</option>
												<option>First Class</option>
											</select>
										</div>
									</div>
								</div>
							</div>

							
							<div class="card-body p-4 pt-0">
								
								<div class="tab-content" id="pills-tabContent">
									
									<div class="tab-pane fade show active" id="flight-one-way" role="tabpanel" aria-labelledby="flight-one-way-tab">
										<div class="row g-4">
											
											<div class="col-md-6 position-relative">
												<div class="form-icon-input form-size-lg form-fs-lg">
													<select class="form-select js-choice" data-search-enabled="true">
														<option value="">Flying from...</option>
														<option>San Jacinto, USA</option>
														<option>North Dakota, Canada</option>
														<option>West Virginia, Paris</option>
													</select>
													<span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
												</div>

											
												<div class="btn-flip-icon z-index-9">
													<button class="btn btn-dark shadow btn-round mb-0"><i class="fa-solid fa-right-left"></i></button>
												</div>
											</div>

											
											<div class="col-md-6">
												<div class="form-icon-input form-size-lg form-fs-lg">
													<select class="form-select js-choice" data-search-enabled="true">
														<option value="">Flying to...</option>
														<option>San Jacinto, USA</option>
														<option>North Dakota, Canada</option>
														<option>West Virginia, Paris</option>
													</select>
													<span class="form-icon"><i class="bi bi-send fs-5"></i></span>
												</div>
											</div>

											
											<div class="col-md-6">
												<div class="form-icon-input form-fs-lg">
													<input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y"  placeholder="Select check-in date"/>
													<span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
												</div>
											</div>

											<div class="col-md-6">
												<div class="form-icon-input form-fs-lg">
													<input type="text" class="form-control form-control-lg" placeholder="Select occupant"/>
													<span class="form-icon"><i class="bi bi-people fs-5"></i></span>
												</div>
											</div>
										</div>

										
										<div class="text-center pt-0">
											<a class="btn btn-lg btn-primary mb-n7" href="hero-multiple-search.html#">Search Flight <i class="bi bi-arrow-right ps-3"></i></a>
										</div>
									</div>
								

									
									<div class="tab-pane fade" id="flight-round-way" role="tabpanel" aria-labelledby="flight-round-way-tab">
										
										<div class="row g-4">
											
											<div class="col-md-6 position-relative">
												<div class="form-icon-input form-size-lg form-fs-lg">
													<select class="form-select js-choice" data-search-enabled="true">
														<option value="">Flying from...</option>
														<option>San Jacinto, USA</option>
														<option>North Dakota, Canada</option>
														<option>West Virginia, Paris</option>
													</select>
													<span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
												</div>

												
												<div class="btn-flip-icon z-index-9">
													<button class="btn btn-dark shadow btn-round mb-0"><i class="fa-solid fa-right-left"></i></button>
												</div>
											</div>

											
											<div class="col-md-6">
												<div class="form-icon-input form-size-lg form-fs-lg">
													<select class="form-select js-choice" data-search-enabled="true">
														<option value="">Flying to...</option>
														<option>San Jacinto, USA</option>
														<option>North Dakota, Canada</option>
														<option>West Virginia, Paris</option>
													</select>
													<span class="form-icon"><i class="bi bi-send fs-5"></i></span>
												</div>
											</div>

											<div class="col-md-4">
												<div class="form-icon-input form-fs-lg">
													<input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select check-in date"/>
													<span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
												</div>
											</div>

										
											<div class="col-md-4">
												<div class="form-icon-input form-fs-lg">
													<input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select check-out date"/>
													<span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
												</div>
											</div>

										
											<div class="col-md-4">
												<div class="form-icon-input form-fs-lg">
													<input type="text" class="form-control form-control-lg" placeholder="Select occupant"/>
													<span class="form-icon"><i class="bi bi-people fs-5"></i></span>
												</div>
											</div>
										</div>
									
										<div class="col-12 text-center pt-0">
											<a class="btn btn-lg btn-primary mb-n7" href="hero-multiple-search.html#">Search Flight <i class="bi bi-arrow-right ps-3"></i></a>
										</div>
										
									</div>
									
								</div>
								
							</div>	
						</form>
					</div>
				

					
					<div class="tab-pane fade" id="tab-1-3">
						<form class="card shadow p-0">
							
							<div class="card-header p-4">
								<h5 class="mb-0"><i class="fa-solid fa-globe-americas fa-fw me-2"></i>Tour Booking</h5>
							</div>

							
							<div class="card-body p-4 pt-0">
								<div class="row g-4">
									
									<div class="col-lg-4">
										<div class="form-icon-input form-size-lg form-fs-lg">
											<select class="form-select js-choice" data-search-enabled="true">
												<option value="">Select tour location</option>
												<option>San Jacinto, USA</option>
												<option>North Dakota, Canada</option>
												<option>West Virginia, Paris</option>
											</select>
											<span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
										</div>
									</div>

								
									<div class="col-lg-4">
										<div class="form-icon-input form-fs-lg">
											<input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select date"/>
											<span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
										</div>
									</div>

									<div class="col-lg-4">
										<div class="form-icon-input form-size-lg form-fs-lg">
											<select class="form-select js-choice" data-search-enabled="true">
												<option value="">Select tour type</option>
												<option>Adventure</option>
												<option>Beach</option>
												<option>Desert</option>
												<option>History</option>
											</select>
											<span class="form-icon"><i class="fa-solid fa-person-skating fs-5"></i></span>
										</div>
									</div>
								</div> 

								
								<div class="text-center pt-0">
									<a class="btn btn-lg btn-primary mb-n7" href="hero-multiple-search.html#">Search Tour <i class="bi bi-arrow-right ps-3"></i></a>
								</div>
							</div>
						</form>
					</div>
				</div> 
			</div>
			
		</div>
	</div>
	
</section>



</main>



<div class="back-top"></div>
<script src="./assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>


<script src="./assets/vendor/choices/js/choices.min.js"></script>
<script src="./assets/vendor/flatpickr/js/flatpickr.min.js"></script>
<script src="./assets/js/functions.js"></script>

</body>

  );
}