import type { Config } from "tailwindcss";

export default {

    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './**/*.{js,ts,jsx,tsx,mdx}',  // ← catch-all
    ],
  
  theme: {
    extend: {
      colors: {
        zama: {
          primary: '#FFCC00',    // Zama yellow
          secondary: '#1A1A2E',  // Dark blue
          accent: '#FFE566',     // Light yellow
          dark: '#0F0F1A',       // Darker background
          card: '#16162A',       // Card background
          border: '#2A2A4A',     // Border color
          text: '#E0E0E0',       // Light text
          muted: '#8888AA',      // Muted text
        },
        level: {
          curious: '#6B7280',     // Gray - Level 1
          advocate: '#3B82F6',    // Blue - Level 2
          expert: '#8B5CF6',      // Purple - Level 3
          ambassador: '#F59E0B',  // Orange - Level 4
          legend: '#FFCC00',      // Gold - Level 5
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-zama': 'linear-gradient(135deg, #FFCC00 0%, #FFE566 50%, #FFCC00 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F0F1A 0%, #1A1A2E 100%)',
        'noise': "url('/noise.svg')",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 204, 0, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 204, 0, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
