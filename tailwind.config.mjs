/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		extend: {
			colors: {
				// ブランドカラーパレット（明るいUI用）
				cream: {
					DEFAULT: '#FBF7EF', // 背景メイン
					50: '#FBF7EF',
					100: '#F5F3ED',
					200: '#EBE6DA',
				},
				coffee: {
					DEFAULT: '#3B2A1E', // テキスト/アクセント
					900: '#3B2A1E',
					800: '#4F3A26',
					700: '#6D5338',
				},
				roast: {
					DEFAULT: '#8B5A2B', // 強アクセント
					600: '#8B5A2B',
					700: '#7A4F26',
				},
				forest: {
					DEFAULT: '#1F4D3A', // 差し色（森）
					50: '#F0F5F2',
					100: '#D4E4D9',
					500: '#3D6D4E',
					600: '#2D5240',
					700: '#1F4D3A',
				},
				ink: {
					DEFAULT: '#1A1A1A', // 見出し
					900: '#1A1A1A',
					800: '#2D2D2D',
				},
				// 旧カラー（後方互換性のため残す）
				charcoal: {
					DEFAULT: '#2d2d2d',
					900: '#1a1a1a',
				},
			},
		},
	},
	plugins: [],
}
