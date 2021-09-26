// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//     purge: [],
//     purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//      darkMode: false, // or 'media' or 'class'
//      theme: {
//        extend: {
//         fontFamily: {
//                     sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
//                },
//        },
//      }, 

//      variants: {
//        extend: {},
//      },
//      plugins: [],
//    }
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    purge: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        fontFamily: {
          sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
