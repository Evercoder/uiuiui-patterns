import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LinePattern from '../components/LinePattern';

storiesOf('LinePattern', module)
	.add('Basic', () => {
		return <svg>
			<defs>
				<LinePattern id='mypattern' size='20'/>
			</defs>
			<rect x='0' y='0' width='100%' height='100%' fill="url(#mypattern)"/>
		</svg>
	});