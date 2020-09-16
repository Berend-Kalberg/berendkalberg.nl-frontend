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
    },
    extend: {
        fontFamily: {
            'gotham-rounded-bold': ['Gotham Rounded Bold'],
            'gotham-rounded-bold-italic': ['Gotham Rounded Bold Italic'],
            'gotham-rounded-italic': ['Gotham Rounded Italic'],
            'gotham-rounded-light': ['Gotham Rounded Light'],
            'gotham-rounded-light-italic': ['Gotham Rounded Light italic'],
            'gotham-rounded': ['Gotham Rounded'],
            'gotham-rounded-book': ['Gotham Rounded Book'],
            'gotham-rounded-book-italic': ['Gotham Rounded Book Italic'],
        }
    },
  },
  variants: {},
  plugins: [],
}
