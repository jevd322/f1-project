module.exports = {
    darkMode: ['class'],
    content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
  	extend: {
  		colors: {
  			brand: {
  				'50': '#1B1C1D',
  				'100': '#232426'
  			},
  			f1: {
  				'red-bull': '#3671C6',
  				'red-bull-dark': '#1E3A70',
  				'ferrari': '#E8002D',
  				'ferrari-dark': '#A6002A',
  				'mercedes': '#27F4D2',
  				'mercedes-dark': '#00D2BE',
  				'mclaren': '#FF8000',
  				'mclaren-dark': '#FF6000',
  				'aston-martin': '#229971',
  				'aston-martin-dark': '#00594F',
  				'alpine': '#FF87BC',
  				'alpine-dark': '#FD4BC1',
  				'williams': '#64C4FF',
  				'williams-dark': '#00A0DD',
  				'rb': '#6692FF',
  				'rb-dark': '#4664F1',
  				'kick-sauber': '#00E701',
  				'kick-sauber-dark': '#00C203',
  				'haas': '#B6BABD',
  				'haas-dark': '#787B7E'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui'
  			]
  		},
  		backgroundImage: {
  			'my-gradient': 'linear-gradient(to right, #FFD37B, #FFC857)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	plugins: []
  },
    plugins: [require("tailwindcss-animate")]
}
