import React from 'react';
import Svg, {Path} from 'react-native-svg';

function EmailInput(props: any) {
  const {color} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.116 2.5a4.214 4.214 0 014.218 4.208v6.584a4.215 4.215 0 01-4.218 4.208H5.884a4.214 4.214 0 01-4.217-4.208V6.708A4.209 4.209 0 015.884 2.5h8.232zm1.326 5.45l.067-.067c.199-.241.199-.591-.01-.833a.7.7 0 00-.44-.217.633.633 0 00-.468.167l-3.757 3c-.484.4-1.176.4-1.667 0l-3.75-3a.634.634 0 00-.833.058.637.637 0 00-.06.834l.11.108 3.791 2.958a2.62 2.62 0 003.258 0l3.759-3.008z"
        fill={color || '#BDBDBD'}
      />
    </Svg>
  );
}

function LockInput(props: any) {
  const {color} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.602 6.163v1.278c1.436.448 2.481 1.747 2.481 3.3v4.113c0 1.922-1.592 3.48-3.556 3.48H6.474c-1.965 0-3.557-1.558-3.557-3.48V10.74c0-1.552 1.046-2.85 2.48-3.299V6.163c.01-2.484 2.067-4.496 4.59-4.496 2.558 0 4.615 2.012 4.615 4.496zm-4.598-3.047c1.72 0 3.116 1.366 3.116 3.047v1.098H6.88V6.147c.008-1.673 1.405-3.031 3.124-3.031zm.737 10.596c0 .406-.33.73-.745.73a.73.73 0 01-.737-.73v-1.838c0-.398.33-.72.737-.72.415 0 .745.322.745.72v1.838z"
        fill={color || '#9E9E9E'}
      />
    </Svg>
  );
}

function EyeSlash(props: any) {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.803 15.253c.625.423 1.386.679 2.196.679 2.146 0 3.893-1.762 3.893-3.928 0-.817-.254-1.585-.673-2.215l-1.064 1.073c.176.334.273.728.273 1.142 0 1.348-1.093 2.451-2.43 2.451-.41 0-.8-.098-1.131-.275l-1.064 1.073zM18.43 6.55c1.415 1.3 2.615 3.051 3.513 5.158a.75.75 0 010 .581c-2.089 4.903-5.806 7.837-9.943 7.837h-.01c-1.883 0-3.688-.62-5.279-1.753l-1.893 1.91a.72.72 0 01-.517.217.705.705 0 01-.517-.217.736.736 0 01-.088-.925l.03-.04 14.43-14.56c.02-.02.04-.04.05-.06.019-.02.038-.039.048-.058l.917-.926a.731.731 0 011.035 0 .73.73 0 010 1.044L18.429 6.55zm-10.33 5.458c0 .256.029.512.068.748l-3.61 3.642c-.976-1.142-1.825-2.52-2.498-4.105a.75.75 0 010-.58c2.088-4.904 5.805-7.828 9.933-7.828h.01c1.395 0 2.75.335 4 .965l-3.26 3.288a4.515 4.515 0 00-.74-.069c-2.157 0-3.904 1.763-3.904 3.938z"
        fill={color || '#212121'}
      />
    </Svg>
  );
}

function Eye(props: any) {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.098 12c0 2.133 1.746 3.87 3.902 3.87 2.146 0 3.893-1.737 3.893-3.87A3.888 3.888 0 0012 8.121c-2.156 0-3.902 1.736-3.902 3.879zm9.639-5.954c1.707 1.319 3.16 3.249 4.205 5.663a.729.729 0 010 .572C19.854 17.111 16.137 20 12 20h-.01c-4.127 0-7.844-2.89-9.931-7.719a.728.728 0 010-.572C4.146 6.88 7.863 4 11.99 4H12c2.068 0 4.03.718 5.737 2.046zM12 14.412a2.428 2.428 0 002.43-2.414A2.43 2.43 0 0012 9.574c-.117 0-.234.01-.341.029a1.997 1.997 0 01-2 1.92h-.05c-.028.155-.048.31-.048.475 0 1.328 1.093 2.414 2.44 2.414z"
        fill={color || '#212121'}
      />
    </Svg>
  );
}

function Close(props: any) {
  const {color, size} = props;
  return (
    <Svg
      width={size || 24}
      height={size ? size + 1 : 25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.75 5.75l-13.5 13.5M18.75 19.25L5.25 5.75"
        stroke={color || '#766E8D'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function EmailOutline(props: any) {
  const {color} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.62 7.516s-2.674 3.21-4.63 3.21c-1.957 0-4.662-3.21-4.662-3.21"
        stroke={color || '#9E9E9E'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M2.043 9.974c0-5.698 1.985-7.597 7.937-7.597s7.936 1.899 7.936 7.597-1.984 7.597-7.936 7.597-7.937-1.9-7.937-7.597z"
        stroke={color || '#9E9E9E'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CalendarOutline(props: any) {
  const {color} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M2.292 10.646c0-5.796 1.932-7.728 7.728-7.728 5.796 0 7.729 1.932 7.729 7.728 0 5.797-1.932 7.729-7.73 7.729-5.795 0-7.728-1.932-7.728-7.729z"
        stroke={color || '#9E9E9E'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.521 7.77h15.007M13.69 11.05h.008M10.024 11.05h.008M6.351 11.05h.008M13.69 14.26h.008M10.024 14.26h.008M6.351 14.26h.008M13.36 1.708v2.719M6.687 1.708v2.719"
        stroke={color || '#9E9E9E'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const SvgComponent = {
  EmailInput,
  LockInput,
  EyeSlash,
  Eye,
  Close,
  EmailOutline,
  CalendarOutline,
};

export {SvgComponent};
