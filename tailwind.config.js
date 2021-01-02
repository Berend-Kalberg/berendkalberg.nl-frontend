module.exports = {
future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    },
  purge: [],
  theme: {
    screens: {
        'xs': '0px',

        'sm': '400px',
        // => @media (min-width: 0px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        'qhd': '2560px',
        // => @media (min-width: 2560px) { ... }

        'uhd': '3840px',
        // => @media (min-width: 3840px) { ... }
    },
    extend: {
        fontFamily: {
            'gotham-rounded-bold': ['Gotham Rounded Bold'],
            'gotham-rounded-book': ['Gotham Rounded Book'],
        }
    },
  },
  variants: {},
  plugins: [],
}
