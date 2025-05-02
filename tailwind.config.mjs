/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#0f0f0f',
        light: '#f0f0f0',
        accent: {
          light: '#d0d0d0',
          dark: '#333333',
        },
      },
      spacing: {
        128: '32rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          'base-100': '#ffffff',
          'base-200': '#f0f0f0',
          'base-300': '#d0d0d0',
          'base-content': '#0f0f0f',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          'base-100': '#0f0f0f',
          'base-200': '#1a1a1a',
          'base-300': '#2a2a2a',
          'base-content': '#f0f0f0',
        },
      },
    ],
  },
};
