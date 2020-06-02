import React from 'react';

// Material-Ui Components
import {
    makeStyles,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tabs,
    Tab
} from '@material-ui/core';

// Material-Ui Icons
import GrainIcon from '@material-ui/icons/Grain';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CloudIcon from '@material-ui/icons/Cloud';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '20px'
    },
    marginTop: {
        marginTop: '20px'
    }
  }));

const today = new Date().getDay();

function getDayofWeek(id) {
    let day = "";
    console.log(id);
    
    // today is a number that is returned from .getDay()
    // id is a number from weather.daily.slice().map((day, id))
    // The first day is remove from the array since it is part of a different component.
    // 1 is added to counter the removal of the first index of the array.
    switch (today + id + 1) {
        case 0:
        case 7:
            day = "Sunday";
            break;
        case 1:
        case 8:
            day = "Monday";
            break;
        case 2:
        case 9:
            day = "Tuesday";
            break;
        case 3:
        case 10:
            day = "Wednesday";
            break;
        case 4:
        case 11:
            day = "Thursday";
            break;
        case 5:
        case 12:
            day = "Friday";
            break;
        case 6:
        case 13:
            day = "Saturday";
            break;
        default:
            console.log(`Day of week could not found: ${id}`);
        }
    return day;
}

export default function Current(props) {

    const classes = useStyles();

    const { weather } = props;
    console.log(weather.daily);

    const listItems = weather.daily.slice(1).map((day, id) =>
        <ListItem key={id}>
            <ListItemIcon>
                <Brightness5Icon />
            </ListItemIcon>
            <ListItemText primary={getDayofWeek(id)} secondary={`${Math.trunc(day.temp.max)} | ${Math.trunc(day.temp.min)}`} />
        </ListItem>
    );
    
    return (
        <Grid 
            container
            direction="column"
            alignItems="center"
        >
            <Typography variant="h6" className={classes.marginTop}>
                Denver
            </Typography>
            
            <Typography variant="h2">
                {Math.trunc(weather.current.temp)}
            </Typography>

            <Typography variant="subtitle2">
                {weather.current.weather[0].description}
            </Typography>
            
            <Tabs
                className={classes.root}
                variant="scrollable"
                scrollButtons="off"
                aria-label="scrollable prevent tabs example"
                value="0"
            >
                <Tab label="12PM" icon={<Brightness5Icon />} aria-label="phone" value="0" disabled={true} />
                <Tab label="1PM" icon={<CloudIcon />} aria-label="favorite" disabled={true}  />
                <Tab label="2PM" icon={<AcUnitIcon />} aria-label="person" disabled={true}  />
                <Tab label="3PM" icon={<GrainIcon />} aria-label="help" disabled={true}  />
                <Tab label="4PM" icon={<Brightness5Icon />} aria-label="shopping" disabled={true}  />
                <Tab label="5PM" icon={<CloudIcon />} aria-label="up" disabled={true}  />
                <Tab label="6PM" icon={<AcUnitIcon />} aria-label="down" disabled={true}  />
                <Tab label="7PM" icon={<GrainIcon />} aria-label="phone" disabled={true}  />
                <Tab label="8PM" icon={<Brightness5Icon />} aria-label="favorite" disabled={true}  />
                <Tab label="9PM" icon={<CloudIcon />} aria-label="person" disabled={true}  />
                <Tab label="10PM" icon={<AcUnitIcon />} aria-label="help" disabled={true}  />
                <Tab label="11PM" icon={<GrainIcon />} aria-label="shopping" disabled={true}  />
                <Tab label="12AM" icon={<Brightness5Icon />} aria-label="up" disabled={true}  />
            </Tabs>

            <List className={classes.marginTop}>
                {listItems}
            </List>
        </Grid>
    );
}