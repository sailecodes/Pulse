/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        RHDLight: ["RedHatDisplay-Light", "sans-serif"],
        RHDRegular: ["RedHatDisplay-Regular", "sans-serif"],
        RHDMedium: ["RedHatDisplay-Medium", "sans-serif"],
        RHDSemiBold: ["RedHatDisplay-SemiBold", "sans-serif"],
        RHDBold: ["RedHatDisplay-Bold", "sans-serif"],
        RHDExtraBold: ["RedHatDisplay-ExtraBold", "sans-serif"],
        RHDBlack: ["RedHatDisplay-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
