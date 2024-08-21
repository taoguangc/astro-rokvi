/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector'],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ['lg']
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ['lg']
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ['lg']
    },
    // Font weights
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/
    }
  ],
  theme: {
    // color: {
    //   transparent: 'transparent',
    //   primary: 'rgb(var(--primary) / <alpha-value>)'
    // },
    extend: {
      maxWidth: {
        '8xl': '81rem'
      },
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: 'rgb(var(--primary))'
        },
        neutral: {
          100: 'rgb(var(--neutral-100))',
          200: 'rgb(var(--neutral-200))',
          300: 'rgb(var(--neutral-300))',
          400: 'rgb(var(--neutral-400))',
          500: 'rgb(var(--neutral-500))',
          600: 'rgb(var(--neutral-600))',
          700: 'rgb(var(--neutral-700))',
          800: 'rgb(var(--neutral-800))',
          900: 'rgb(var(--neutral-900))'
        }
      },
      cursor: {
        fancy: 'url(https://www.svgrepo.com/show/269/color-picker.svg)'
      },
      fontFamily: {
        sans: ['Figtree Variable', ...defaultTheme.fontFamily.sans],
        headings: ['Figtree Variable', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        dropdown: {
          '0%': { transform: 'translateY(-1rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        fadeInShadowLight: {
          '100%': { boxShadow: '0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);' }
        },
        fadeInShadowDark: {
          '100%': { boxShadow: '0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        dropdown: 'dropdown 300ms ease-in-out forwards',
        fadeInShadowLight: 'fadeInShadowLight 500ms ease-in-out forwards',
        fadeInShadowDark: 'fadeInShadowDark 500ms ease-in-out forwards'
      }
    }
  },
  variants: {
    animation: ['responsive']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss/plugin')(function ({ addVariant }) {
      addVariant('dark-me', '.dark_&')
    })
  ]
}
