// https://react-svgr.com/playground/?native=true

import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const TestIcon = () => (
	<Svg width={50} height={50} fill='none' viewBox='0 0 24 24'>
		<Path
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M7 12h10M8 8.5S9 9 10 9c1.5 0 2.5-1 4-1 1 0 2 .5 2 .5m-8 7s1 .5 2 .5c1.5 0 2.5-1 4-1 1 0 2 .5 2 .5m5-3.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
		/>
	</Svg>
)
export default TestIcon
