/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2563EB', // Vibrant Royal Blue
            hover: '#1D4ED8',
            light: '#E8EEFF',
            surface: '#F1F5FD',
          },
          bg: '#F8FAFF',
          navy: {
            900: '#111827',
            800: '#1F2937',
            600: '#4B5563',
            400: '#9CA3AF',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        borderRadius: {
          '3xl': '1.75rem',
          '4xl': '2.25rem',
        },
        boxShadow: {
          'soft': '0 10px 30px -10px rgba(37, 99, 235, 0.08)',
          'card': '0 4px 20px -2px rgba(17, 24, 39, 0.05)',
        }
      },
    },
    plugins: [],
  }