/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'schemes-inverse-on-surface': '#f7f0e2',
        'material-theme-extended-deep-blue-signature-seed': '#0d3b66',
        'material-theme-black': '#000',
        'material-theme-white': '#fff',
        'schemes-on-primary': '#fff',
        'material-theme-extended-deep-blue-signature-light-color-container': '#d3e4ff',
        lightsteelblue: '#bac9e6',
        steelblue: '#406e99',
        'schemes-on-primary-container': '#221b00',
        darkgray: '#9a9a9a',
        'schemes-secondary-container': '#efe2bb',
        wheat: '#d6c9a1',
        gainsboro: '#d9d9d9'
      },
      spacing: {},
      fontFamily: {
        roboto: 'Roboto',
        inherit: 'inherit'
      },
      borderRadius: {
        '31xl': '50px',
        '11xl': '30px',
        xl: '20px'
      },
      screens: {
        mq1800: {
          raw: 'screen and (max-width: 1800px)'
        },
        mq1525: {
          raw: 'screen and (max-width: 1525px)'
        },
        mq1500: {
          raw: 'screen and (max-width: 1500px)'
        },
        mq1350: {
          raw: 'screen and (max-width: 1350px)'
        },
        mq1225: {
          raw: 'screen and (max-width: 1225px)'
        },
        mq950: {
          raw: 'screen and (max-width: 950px)'
        },
        mq900: {
          raw: 'screen and (max-width: 900px)'
        },
        mq850: {
          raw: 'screen and (max-width: 850px)'
        },
        mq450: {
          raw: 'screen and (max-width: 450px)'
        },
        mqMobile: {
          raw: 'screen and (min-width: 900px)'
        }
      }
    },
    fontSize: {
      '9xl': '28px',
      '3xl': '22px',
      '13xl': '32px',
      '7xl': '26px',
      lgi: '19px',
      base: '16px',
      xl: '20px',
      '45xl': '64px',
      '32xl': '51px',
      '19xl': '38px',
      '29xl': '48px',
      '10xl': '29px',
      '5xl': '24px',
      inherit: 'inherit'
    }
  },
  plugins: ['flowbite/plugin'],
  corePlugins: {
    preflight: false
  }
}
