import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"
//@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,300i,400,400i,500,500i,600,700,800,900');
const typography = new Typography({
	baseFontSize: '18px',
	scaleRatio: 3,
	baseLineHeight: 1.7,
	headerFontFamily: ['Montserrat'],
	bodyFontFamily: ['Open Sans'],
	googleFonts: [
		{
			name: 'Montserrat',
			styles: [
				'100',
				'200',
				'300',
				'300i',
				'400',
				'400i',
				'500',
				'500i',
				'600',
				'700',
				'800',
				'900'
			],
		},
		{
			name: 'Open Sans',
			styles: [
				'200',
				'300i',
				'400',
				'400i',
				'500',
				'500i'
			]
		}
	]
})

export default typography