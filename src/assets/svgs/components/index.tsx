import React from 'react';
import Svg, {Path} from 'react-native-svg';

function MinusCircle(props: any) {
  const {color} = props;
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 2.667C8.653 2.667 2.667 8.653 2.667 16S8.653 29.333 16 29.333 29.333 23.347 29.333 16 23.347 2.667 16 2.667zM21.227 17H10.56c-.547 0-1-.453-1-1 0-.547.453-1 1-1h10.667c.546 0 1 .453 1 1 0 .547-.44 1-1 1z"
        fill={color || '#4C2F8D'}
      />
    </Svg>
  );
}

function AddCircle(props: any) {
  const {color} = props;
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 2.667C8.653 2.667 2.667 8.653 2.667 16S8.653 29.333 16 29.333 29.333 23.347 29.333 16 23.347 2.667 16 2.667zM21.333 17H17v4.333c0 .547-.453 1-1 1-.547 0-1-.453-1-1V17h-4.333c-.547 0-1-.453-1-1 0-.547.453-1 1-1H15v-4.333c0-.547.453-1 1-1 .547 0 1 .453 1 1V15h4.333c.547 0 1 .453 1 1 0 .547-.453 1-1 1z"
        fill={color || '#4C2F8D'}
      />
    </Svg>
  );
}

function ArrowDownSelect(props: any) {
  const {size, color} = props;
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={color || '#000'}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ArrowBackApp(props: any) {
  const {stroke} = props;
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.76 7.907L4.667 16l8.093 8.093M27.333 16H4.893"
        stroke={stroke || '#fff'}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function People(props: any) {
  const {size, color} = props;
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.107 7.247a1.213 1.213 0 00-.22 0A2.947 2.947 0 013.04 4.293c0-1.633 1.32-2.96 2.96-2.96a2.957 2.957 0 01.107 5.913zM10.94 2.667A2.332 2.332 0 0113.274 5c0 1.26-1 2.287-2.247 2.333a.753.753 0 00-.173 0M2.773 9.707c-1.613 1.08-1.613 2.84 0 3.913 1.834 1.227 4.84 1.227 6.674 0 1.613-1.08 1.613-2.84 0-3.913-1.827-1.22-4.834-1.22-6.674 0zM12.227 13.333c.48-.1.933-.293 1.306-.58 1.04-.78 1.04-2.066 0-2.846a3.315 3.315 0 00-1.286-.574"
        stroke={color || '#4C2F8D'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Calendar(props: any) {
  const {width, height, color} = props;
  return (
    <Svg
      width={width || 25}
      height={height || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.625 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM16.625 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM9.125 14.5c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.44-.29-.71 0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.2-.16.33-.21.36-.15.81-.07 1.09.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18-.03.05-.08.1-.12.15-.19.18-.45.29-.71.29zM12.625 14.5c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.44-.29-.71 0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.2-.16.33-.21.36-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18-.03.05-.08.1-.12.15-.19.18-.45.29-.71.29zM16.125 14.5c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21l-.12-.15a.757.757 0 01-.09-.18.636.636 0 01-.06-.18c-.01-.07-.02-.14-.02-.2 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18-.03.05-.08.1-.12.15-.19.18-.45.29-.71.29zM9.125 18c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zM12.625 18c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.37-.37 1.05-.37 1.42 0 .09.09.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zM16.125 18c-.26 0-.52-.11-.71-.29a.933.933 0 01-.21-.33.995.995 0 01-.08-.38c0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zM21.125 9.84h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill={color || '#BBACE8'}
      />
      <Path
        d="M16.625 22.75h-8c-3.65 0-5.75-2.1-5.75-5.75V8.5c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75V17c0 3.65-2.1 5.75-5.75 5.75zm-8-18.5c-2.86 0-4.25 1.39-4.25 4.25V17c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V8.5c0-2.86-1.39-4.25-4.25-4.25h-8z"
        fill={color || '#BBACE8'}
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

function DefaultZapReview(props: any) {
  const {size} = props;
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.545 7.027h4.345l-5.816 6.574.87-4.023.13-.605H3.11L8.926 2.4l-.87 4.022-.13.605h.62z"
        stroke="#4C2F8D"
        strokeMiterlimit={4.80973}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function SelectZapReview(props: any) {
  const {size} = props;
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.818.636L2 9.473h5.455l-1.273 5.89L14 6.528H8.545L9.818.637z"
        fill="#4C2F8D"
      />
    </Svg>
  );
}

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

const SvgComponent = {
  MinusCircle,
  AddCircle,
  ArrowDownSelect,
  ArrowBackApp,
  People,
  Calendar,
  Close,
  DefaultZapReview,
  SelectZapReview,
  EmailInput,
  LockInput,
};

export {SvgComponent};
