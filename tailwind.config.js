/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}', './libs/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fnRed: '#F04438',
        fnPink: '#FEC7C6',
        fnBlue: '#8EB9E6',
        fnYellow: '#FEE987',
        fnGreen: '#B0DDC1',
        black900: '#1C1C1E',
        black700: '#6E6D73',
        black500: '#B3B4B9',
        black400: '#D9D9DC',
        black300: '#E4E5EA',
        black200: '#F3F3F8',
        black100: '#FBFBFD',
        success: '#12B76A',
        kakao: '#FEE500',
        kakaoTxt: '#212121',
      },
    },
    fontFamily: {
      PTDBlack: ['Pretendard-Black'],
      PTDBold: ['Pretendard-Bold'],
      PTDExtraBold: ['Pretendard-ExtraBold'],
      PTDExtraLight: ['Pretendard-ExtraLight'],
      PTDLight: ['Pretendard-Light'],
      PTDMedium: ['Pretendard-Medium'],
      PTDRegular: ['Pretendard-Regular'],
      PTDSemiBold: ['Pretendard-SemiBold'],
      PTDThin: ['Pretendard-Thin'],
      UhBeeBold: ['UhBeemysenBold'],
      UhBee: ['UhBeemysen'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.w-fit': {
          width: 'fit-content',
        },
        '.error-text': {
          color: '#B3B4B9',
          fontFamily: 'Pretendard-Light',
          fontSize: '12px',
        },
        '.default-label': {
          color: '#1C1C1E',
          fontFamily: 'Pretendard-Light',
          fontSize: '12px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
    },
  ],
};
