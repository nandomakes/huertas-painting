/** @type {import('tailwindcss').Config} */
// VERSION 1 — layout & spacing from paris-painting.com, branding from
// certapro.com (sampled from the homepage): signature yellow #FDB913, red
// #D2232A for the main header CTA, charcoal #231F20 for dark bands and text,
// light gray #F2F2F2 sections, Roboto throughout, square buttons.
// The yellow pairs naturally with the sun + brush in Huerta's own logo.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        primary: '#FDB913', // CertaPro yellow: buttons, icon badges, top bar, footer
        primaryDk: '#EBA600', // button hover / bottom edge
        onPrimary: '#231F20', // text on yellow
        secondary: '#231F20', // charcoal: hero panel, CTA band, dark sections
        secondaryDk: '#141112',
        accent: '#D2232A', // CertaPro red: header phone CTA, small highlights
        heading: '#231F20', // section titles stay charcoal, as on the reference
        link: '#B8191F', // text links on light surfaces (red, readable on white)
        linkDk: '#8F1318',
        ink: '#231F20',
        body: '#3E3735', // body copy (CertaPro warm dark gray)
        muted: '#6B6461',
        surface: '#F2F2F2', // light gray bands
        line: '#E2E0DE',
        paper: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Roboto Variable"', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['"Roboto Variable"', 'Roboto', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '67.5rem',
      },
      borderRadius: {
        btn: '3px',
        card: '3px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
