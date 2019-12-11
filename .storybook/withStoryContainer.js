import React from 'react';
import { makeDecorator } from '@storybook/addons';
import { H1, IntroText } from '@computapars/typography';
import {
	Container,
	FullMainLayout,
	MainGrid,
	Divider,
} from '@computapars/layout';
import { FlexBox, FlexBoxItem } from '@computapars/flex';

export default makeDecorator({
	name: 'withStoryContainer',
	parameterName: 'storyContainer',
	// This means don't run this decorator if the notes decorator is not set
	skipIfNoParametersOrOptions: true,
	wrapper: (storyFn, context, { parameters, options }) => {
		return (
			<FullMainLayout>
				<MainGrid>
					<FlexBox column full alignCenter>
						<Container backgroundColor="white">
							<FlexBoxItem>
								<H1 margin={['0', '0']}>{options.header}</H1>
							</FlexBoxItem>
							<FlexBoxItem>
								<Divider></Divider>
							</FlexBoxItem>
							<IntroText>{options.introText}</IntroText>
							<FlexBoxItem>
								<Divider></Divider>
							</FlexBoxItem>
							{storyFn(context)}
						</Container>
					</FlexBox>
				</MainGrid>
			</FullMainLayout>
		);
	},
});
