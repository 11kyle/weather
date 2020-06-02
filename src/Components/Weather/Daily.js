import React from 'react';
import {
    Tabs,
    Tab,
    Typography
} from '@material-ui/core';
// Icons
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainIcon from '@material-ui/icons/Grain';
import AcUnitIcon from '@material-ui/icons/AcUnit';

export default function Daily() {
    return (
        <Tabs
            variant="scrollable"
            scrollButtons="on"
        >
            <Tab label="Sunday" icon={<WbSunnyIcon />} />
            <Tab label="Sunday" icon={<CloudIcon />} />
            <Tab label="Sunday" icon={<GrainIcon />} />
            <Tab label="Sunday" icon={<AcUnitIcon />} />
        </Tabs>
    );
}