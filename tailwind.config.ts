import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				'valorant-bg': "#1a1a22",
				'primary-dark-valorant': "#0C111D",
				'counter': '#3C4851',
				'viper': '#0B6F30',
				'agent': '#1E1E1E',
				'price': '#3BE4C4',
				'valorant-footer': '#261341',
				'primary-dark': '#030812',
				'footer': '#08072C',
				'btn-main': '#FD1C68',
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				equinox: "equinox",
				valorant: "valorant",
				vonique: "vonique",
			},
			minWidth: {
				'sm': '320px',
			},
			screens: {
				'gl': '1025px',
			},
			gridTemplateColumns: {
				'banner': '2fr 1fr',
			},
			gridTemplateRows: {
				'res': '1fr 2fr',
			},
			boxShadow: {
				'glow': '100px 100px 100px rgba(139, 92, 246, 0.5) , 0 0 100px  rgba(244, 114, 182, 0.5)',
			},
			dropShadow: {
				'glow': '100px 100px 100px rgba(139, 92, 246, 0.5) , 0 0 100px  rgba(244, 114, 182, 0.5)',
			}
		}
	},
};

export default config;
