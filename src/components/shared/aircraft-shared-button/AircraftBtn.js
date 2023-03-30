const AircraftBtn = ({ btnText, toggleText }) => {
    return (
     
        <button
          type="button"
          class="2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 px-4 mr-2 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 0 dark:text-[#5C0632] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] ac-button"
          id="acb"
          onClick={toggleText}
        >
          {btnText}
        </button>

    );
  };


  export default AircraftBtn;