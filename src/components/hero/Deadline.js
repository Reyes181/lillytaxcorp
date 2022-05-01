import React from 'react';
import {Slide} from 'react-awesome-reveal';
import {DeadlineWrapper, DeadlineBottom, DeadlineItem, DeadlineTop, DeadlineTime} from '../../styles/hero.styles'

const Deadline = () => {
    const renderItem = (value) => (
        <DeadlineItem>
            <DeadlineTime>
                {value}
            </DeadlineTime>
        </DeadlineItem>
    )
    return (
        <Slide left delay={1000}>
            <DeadlineWrapper>
                <DeadlineTop>
                    Deadline To File Tax Return
                </DeadlineTop>
                <DeadlineBottom>
                    {renderItem('.04')}
                    {renderItem('.18')}
                    {renderItem('2022')}
                </DeadlineBottom>
            </DeadlineWrapper>
        </Slide>
    )
}

export default Deadline;