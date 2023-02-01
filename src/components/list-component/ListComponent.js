import React from "react";

const ListComponent = ({ hidden, arr, searchFac, value }) => {
  return (
    <div className="absolute">
      <ul
        class="border border-gray-200 rounded overflow-hidden shadow-md"
        hidden={hidden}
      >
     

        {searchFac && searchFac.length > 1
          ? arr.map((item, i) => (
              <div key={i}>
                <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  {item}.
                </li>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ListComponent;
