import React from 'react';
import { MainStyles } from '../../styles/Main.styles';
import Content from '../molecules/Content';
import Header from '../molecules/Header';
import Tab from '../molecules/Tab';

export default function Main() {
    return (
        <MainStyles>
            <Header />
            <Tab />
            <Content />
        </MainStyles>
    )
}
