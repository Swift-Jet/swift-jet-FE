const AircraftBtn = ({ btnText, toggleText }) => {
    return (
      <div>
        <button
          type="button"
          class="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#5C0632] hover:border-[#ffffff] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 0 dark:text-[#5C0632] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5C0632] w-48 ac-button"
          onClick={toggleText}
        >
          {btnText}
        </button>
      </div>
    );
  };


  export default AircraftBtn;