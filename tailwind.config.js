/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:    '#050507',
        'gray-1': '#0D0D12',
        'gray-2': '#16161E',
        'gray-3': '#1F1F2B',
        'gray-4': '#2C2C3A',
        'gray-5': '#8888A0',
        'gray-6': '#AAAABB',
        accent:   '#C8FF00',
        'accent-2': '#E0FF88',
        cream:    '#F8F7F4',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        mono:    ['DM Mono', 'monospace'],
        sans:    ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'scan':     'scan 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
