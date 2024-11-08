/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        RedHatDisplayLight: ["RedHatDisplay-Light", "sans-serif"],
        RedHatDisplayRegular: ["RedHatDisplay-Regular", "sans-serif"],
        RedHatDisplayMedium: ["RedHatDisplay-Medium", "sans-serif"],
        RedHatDisplaySemiBold: ["RedHatDisplay-SemiBold", "sans-serif"],
        RedHatDisplayBold: ["RedHatDisplay-Bold", "sans-serif"],
        RedHatDisplayExtraBold: ["RedHatDisplay-ExtraBold", "sans-serif"],
        RedHatDisplayBlack: ["RedHatDisplay-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
