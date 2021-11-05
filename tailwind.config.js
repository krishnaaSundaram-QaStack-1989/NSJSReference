// Default Config -> https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
  theme: {
    // .{screen}:{utility}
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    colors: {
      transparent: 'transparent',
      black: '#333333',
      'grey-darkest': '#2b343e',
      'grey-darker': '#363e48',
      'grey-dark': '#434343',
      grey: '#808080',
      'grey-light': '#a0a0a0',
      'grey-medium-light': '#eeeeee',
      'grey-lighter': '#cecece',
      'grey-lightest': '#e2e2e2',
      'grey-superlight': '#f1f1f1',
      white: '#ffffff',
      'red-dark': '#ce2019',
      red: '#e4241c',
      'yellow-darker': '#ffc200',
      'yellow-dark': '#fcc34f',
      yellow: '#fdd572',
      'green-dark': '#45bb5f',
      'green-darker': '#339933',
      green: '#61c478',
      'green-light': '#b7e0b7',
      'blue-darker': '#3078b9',
      'blue-dark': '#4f70b6',
      blue: '#0089c6',
      'blue-bright': '#349be3',
    },

    spacing: {
      '0': '0',
      px: '1px', //1px
      '1': '0.25rem', //4px
      '2': '0.5rem', //8px
      '3': '0.75rem', //12px
      '4': '1rem', //16px
      '5': '1.25rem', //20px
      '6': '1.5rem', //24px
      '7': '1.75rem', //28px
      '8': '2rem', //32px
      '10': '2.5rem', //40px
      '11': '2.75rem', //44px
      '12': '3rem', //48px
      '13': '3.25rem', //52px
      '16': '4rem', //64px
      '17': '4.25rem', //68px
      '18': '4.5rem', //72px
      '20': '5rem', //80px
      '22': '5.5rem', //88px
      '24': '6rem', //96px
      '25': '6.25rem', //100px
      '26': '6.5rem', //104px
      '28': '7rem', //112px
      '32': '8rem', //128px
      '35': '8.75rem', //140px
      '36': '9rem', //144px
      '40': '10rem', //160px
      '44': '11rem', //176px
      '48': '12rem', //192px
      '50': '12.5rem', //200px
      '52': '13rem', //208px
      '56': '14rem', //210px
      '58': '14.5rem', //232px
      '60': '15rem', //240px
      '64': '16rem', //256px
      '68': '17rem', //272px
      '72': '18rem', //288px
      '75': '18.75rem', //300px
      '80': '20rem', //320px
      '85': '21.25rem', //340px
    },

    // .text-{size}
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '14xl': '12rem',
    },

    // .font-{weight}
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    // .w-{size}
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/10': '10%',
      '9/10': '90%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),

    // .h-{size}
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),

    // .min-h-{size}
    minHeight: {
      '0': '0',
      '16': '4rem', //64px
      '24': '6rem', //96px
      '32': '8rem', //128px
      '36': '9rem', //144px
      '40': '10rem', //160px
      '48': '12rem', //192px
      '50': '12.5rem', //200px
      '52': '13rem', //208px
      '64': '16rem', //256px
      '96': '24rem', //384px
      full: '100%',
      screen: '100vh',
    },

    // .max-h-{size}
    maxHeight: {
      '44': '11rem',
      '48': '12rem',
      '96': '24rem',
      full: '100%',
      screen: '100vh',
    },

    // .min-w-{size}
    minWidth: {
      '0': '0',
      '1': '0.25rem', //4px
      '2': '0.5rem', //8px
      '3': '0.75rem', //12px
      '4': '1rem', //16px
      '6': '1.5rem', //24px
      '8': '2rem', //32px
      '10': '2.5rem', //40px
      '12': '3rem', //48px
      '16': '4rem', //64px
      '20': '5rem', //80px
      '24': '6rem', //96px
      '25': '6.25rem', //100px
      '32': '8rem', //128px
      '35': '8.75rem', //140px
      '36': '9rem', //144px
      '40': '10rem', //160px
      '44': '11rem', //176px
      '48': '12rem', //192px
      '50': '12.5rem', //200px
      '52': '13rem', //208px
      '64': '16rem', //256px
      '85': '21.25rem', //340px
      '3/4': '75%',
      full: '100%',
    },

    // .max-w-{size}
    maxWidth: {
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%',
    },

    // .p{side?}-{size}
    padding: (theme) => theme('spacing'),

    // .m{side?}-{size}
    margin: (theme, {negative}) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    // .bg-{side}
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },

    // .bg-{size}
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    // .tracking-{size}
    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      medium: '0.03em',
      wide: '0.05em',
    },

    // .text-{color}
    textColor: (theme) => theme('colors'),

    // .bg-{color}
    backgroundColor: (theme) => theme('colors'),

    // .border-{color}
    borderColor: (theme) => theme('colors'),

    // .rounded-{type}
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      oval: '1.5rem', //24px
      full: '9999px',
      full80: '80%',
    },

    // .border-{size}
    borderWidth: {
      default: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '10': '10px',
    },

    // .shadow-{size}
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },

    // .cursor-{type}
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },

    // .flex-{type}
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },

    // .leading-{size}
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      loosen: '3'
    },

    // .list-{type}
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },

    // .object-{side}
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },

    // .opacity-{value}
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },

    // .order-{order}
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },

    // .placeholder-{color}
    placeholderColor: (theme) => theme('colors'),

    // .z-{index}
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive', 'hover'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'group-hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: [
    /* Transition plugin
       Example usage:
        <div className='transition'/>
        <div className='transition-slow'/>
        <div className='transition-normal-in-out-quad'/>
        <div className='transition-slow-in-out-quad'/>
    */
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        slow: 'all 2s ease',
        'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    }),

    function({addComponents}) {
      addComponents({
        '.loader': {
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #83898c',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          '-webkit-animation': 'spin 1s linear infinite',
          animation: 'spin 1s linear infinite',
        },
        '@-webkit-keyframes spin': {
          '0%': {'-webkit-transform': 'rotate(0deg)'},
          '100%': {'-webkit-transform': 'rotate(360deg)'},
        },
        '@keyframes spin': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        '.loadingAnimation': {
          margin: '0',
          height: '2rem',
          backgroundImage:
            'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 90%) ,linear-gradient(#f2f2f2 30px, transparent 0)',
          linearGradient: '(#f2f2f2 30px, transparent 0)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '150px 30px, 100% 100%',
          backgroundPosition: '0 0, 120px 0',
          '-webkit-animation': 'shine 1s linear infinite',
          animation: 'shine 1s linear infinite',
        },
        '@keyframes shine': {
          from: {backgroundPosition: '0 0, 0 0'},
          to: {backgroundPosition: '100% 0, 0 0'},
        },
        '.place-bottom:after': {
          borderBottomColor: '#f3f3f3 !important',
        },
      });
      addComponents(addComponents);
    },
  ],
  corePlugins: {
    container: false,
  },
};
