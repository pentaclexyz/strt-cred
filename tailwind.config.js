/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-01": "var(--bg-01)",
        "bg-02": "var(--bg-02)",
      },
      fontSize: {
        xs: '8px',
        sm: '0.813rem',
        base: '0.875rem',
        lg: '1rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
      colors: {
        "primary": "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-extra-dark": "var(--primary-extra-dark)",
        "primary-super-dark": "var(--primary-super-dark)",
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
        "border-tertiary": "var(--border-tertiary)",
        "bg-01": "var(--bg-01)",
        "bg-01-solid": "var(--bg-01-solid)",
        "bg-02": "var(--bg-02)",
        "bg-03": "var(--bg-03)",
        "bg-card": "var(--bg-card)",
        "bg-form": "var(--bg-form)",
        "bg-input": "var(--bg-input)",
        "bg-search": "var(--bg-search)",
        "bg-card-hover": "var(--bg-card-hover)",
        "bg-card-secondary": "var(--bg-card-secondary)",
        "bg-card-secondary-hover": "var(--bg-card-secondary-hover)",
        "secondary": "var(--secondary)",
        "tertiary": "var(--tertiary)",
        "black": "var(--black)",
        "txt-hover": "var(--txt-hover)",
        "txt-primary": "var(--txt-primary)",
        "txt-secondary": "var(--txt-secondary)",
        "txt-tertiary": "var(--txt-tertiary)",
        "txt-inverted": "var(--txt-inverted)",
        "highlight": "var(--highlight)",
        "flouro": "var(--flouro)",
      },
      zIndex: {
        '60': '60',
        '100': '100',
        '140': '140',
        '160': '160',
        '200': '200',
        '240': '240',
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp", "autoprefixer")],
}
