import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'accent': '#ee3661',
        'dark': '#0c1b33',
        'light': '#fcfbf9',
        'goldenrod': '#f7fbd0',
        'champagne': '#fce7d7',
      }
    },
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`
  ]
}
