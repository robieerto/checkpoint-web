/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'schemes-inverse-on-surface': '#f7f0e2',
        'material-theme-extended-deep-blue-signature-seed': '#0d3b66',
        'material-theme-black': '#000',
        'schemes-on-primary': '#fff',
        'material-theme-extended-deep-blue-signature-light-color-container': '#d3e4ff',
        lightsteelblue: '#bac9e6',
        'schemes-on-primary-container': '#221b00',
        darkgray: '#9a9a9a',
        'schemes-secondary-container': '#efe2bb',
        wheat: '#d6c9a1'
      },
      spacing: {},
      fontFamily: {
        roboto: 'Roboto',
        inherit: 'inherit'
      },
      borderRadius: {
        '31xl': '50px',
        '11xl': '30px'
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
    },
    screens: {
      mq1800: {
        raw: 'screen and (max-width: 1800px)'
      },
      mq1350: {
        raw: 'screen and (max-width: 1350px)'
      },
      mq900: {
        raw: 'screen and (max-width: 900px)'
      },
      mq450: {
        raw: 'screen and (max-width: 450px)'
      }
    }
  },
  corePlugins: {
    preflight: false
  }
}
