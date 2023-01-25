export default function LocationAndMapLocationPin(
  props: LocationAndMapLocationPinProps
) {
  return (
    <div className="h-6 w-[25px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 16.57 12.79 C 16.448 12.741 16.317 12.717 16.186 12.719 C 16.055 12.721 15.925 12.749 15.804 12.801 C 15.683 12.853 15.574 12.928 15.482 13.022 C 15.391 13.117 15.319 13.228 15.27 13.35 C 15.221 13.472 15.197 13.603 15.199 13.734 C 15.201 13.866 15.229 13.995 15.281 14.116 C 15.333 14.237 15.408 14.346 15.502 14.438 C 15.597 14.529 15.708 14.601 15.83 14.65 C 17.29 15.23 18.2 16.13 18.2 17 C 18.2 18.42 15.74 20 12.2 20 C 8.66 20 6.2 18.42 6.2 17 C 6.2 16.13 7.11 15.23 8.57 14.65 C 8.817 14.552 9.014 14.36 9.119 14.116 C 9.224 13.872 9.228 13.597 9.13 13.35 C 9.032 13.103 8.84 12.906 8.596 12.801 C 8.352 12.696 8.077 12.692 7.83 12.79 C 5.56 13.69 4.2 15.26 4.2 17 C 4.2 19.8 7.71 22 12.2 22 C 16.69 22 20.2 19.8 20.2 17 C 20.2 15.26 18.84 13.69 16.57 12.79 Z M 11.2 9.86 V 17 C 11.2 17.265 11.305 17.52 11.493 17.707 C 11.68 17.895 11.935 18 12.2 18 C 12.465 18 12.72 17.895 12.907 17.707 C 13.095 17.52 13.2 17.265 13.2 17 V 9.86 C 14.143 9.617 14.964 9.038 15.511 8.232 C 16.057 7.426 16.291 6.449 16.168 5.483 C 16.045 4.517 15.575 3.629 14.844 2.986 C 14.114 2.342 13.174 1.987 12.2 1.987 C 11.226 1.987 10.286 2.342 9.556 2.986 C 8.825 3.629 8.355 4.517 8.232 5.483 C 8.109 6.449 8.343 7.426 8.889 8.232 C 9.436 9.038 10.257 9.617 11.2 9.86 Z M 12.2 4 C 12.596 4 12.982 4.117 13.311 4.337 C 13.64 4.557 13.896 4.869 14.048 5.235 C 14.199 5.6 14.239 6.002 14.162 6.39 C 14.084 6.778 13.894 7.135 13.614 7.414 C 13.335 7.694 12.978 7.884 12.59 7.962 C 12.202 8.039 11.8 7.999 11.435 7.848 C 11.069 7.696 10.757 7.44 10.537 7.111 C 10.317 6.782 10.2 6.396 10.2 6 C 10.2 5.47 10.411 4.961 10.786 4.586 C 11.161 4.211 11.67 4 12.2 4 Z"
          fill="#4D4D4D"
         />
      </svg>
    </div>
  );
}

LocationAndMapLocationPin.defaultProps = {};

interface LocationAndMapLocationPinProps {}

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
