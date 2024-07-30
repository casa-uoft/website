import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        'accent-purple': 'var(--aw-color-accent-purple)',
        'accent-red': 'var(--aw-color-accent-red)',
        'accent-blue': 'var(--aw-color-accent-blue)',
        'accent-turquoise': 'var(--aw-color-accent-turquoise)',
        'accent-magenta': 'var(--aw-color-accent-magenta)',
        'accent-cyprus': 'var(--aw-color-accent-cyprus)',
        'accent-yellow': 'var(--aw-color-accent-yellow)',
        'accent-lime': 'var(--aw-color-accent-lime)',
        'cool-gray': 'var(--aw-color-cool-gray)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
