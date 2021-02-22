import React, { useState } from 'react';
import {
    makeStyles,
    Hidden
} from '@material-ui/core/';
import NavBar from './NavBar';
import MyDrawer from './MyDrawer';
import TaskGrid from './TaskGrid';

const useStyles = makeStyles((theme) => ({
    content: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: 236
        },
        padding:theme.spacing(10,2)
    },
    offset: theme.mixins.toolbar
}));

export default function MainView() {

    const classes = useStyles();
    
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <NavBar 
                handleDrawerToggle={handleDrawerToggle}/>
            <Hidden xsDown>
                <MyDrawer 
                    variant="permanent"
                    open={true}/>
            </Hidden>
            <Hidden smUp>
                <MyDrawer 
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}/>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.offset}>
                    <TaskGrid />
                </div>
            </div>
        </div>
    );
}