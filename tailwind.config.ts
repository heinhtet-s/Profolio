import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                bgDark: '#090D16',
                surface: '#121826',
                surfaceCard: '#161F32',
                surfaceLight: '#1E2942',
                champagne: '#E2CEAC',
                champagneLight: '#F5E9D6',
                champagneDark: '#C9A979',
                secondary: '#E2CEAC',
                secondaryHover: '#F5E9D6',
                navTextColor: '#F8FAFC',
                textColor: '#CBD5E1',
                textMuted: '#94A3B8',
                borderLuxury: 'rgba(226, 206, 172, 0.16)',
                borderGlass: 'rgba(255, 255, 255, 0.07)'
            },
            fontFamily: {
                sans: [
                    'var(--font-sans)',
                    'Plus Jakarta Sans',
                    'Inter',
                    'sans-serif'
                ],
                serif: [
                    'var(--font-serif)',
                    'Playfair Display',
                    'Georgia',
                    'serif'
                ],
                mono: ['Space Grotesk', 'monospace']
            },
            fontSize: {
                heroTitle: '4.25rem',
                title: '3.125rem',
                subTitle: '2.5rem'
            },
            boxShadow: {
                luxury: '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(226, 206, 172, 0.08)',
                glow: '0 0 30px rgba(226, 206, 172, 0.25)',
                cardGlow:
                    '0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(226, 206, 172, 0.1)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gold-gradient':
                    'linear-gradient(135deg, #F5E9D6 0%, #E2CEAC 50%, #C9A979 100%)',
                'dark-gradient':
                    'linear-gradient(180deg, #090D16 0%, #0D1322 100%)'
            }
        }
    },
    plugins: []
};
export default config;
