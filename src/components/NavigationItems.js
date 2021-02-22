import React from 'react';
import List from '@material-ui/core/List';
import { 
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
    Typography,
    Avatar,
    makeStyles,
    Divider,
    IconButton
} from '@material-ui/core/';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    m1: {
        margin: theme.spacing(1)
    },
    justifyEnd: {
        justifyContent: 'end'
    }
  }));

export default function NavigationItems(){

    const classes = useStyles();

    const Logout = () => {
        localStorage.setItem("loggingStaus","notLogged");
        localStorage.removeItem("username");
        localStorage.removeItem("userpassword");
        window.location.href = "/";
    }


    return (
        <>
            <header className={classes.header}>
            <Grid container>
                    <Grid item className={classes.m1}>
                        <Avatar alt="Remy Sharp" src="https://i.dlpng.com/static/png/7262737_preview.png" />
                    </Grid>
                    <Grid item className={classes.m1}>
                        <Typography >
                            User Name
                        </Typography>
                        <Typography>
                            useremail@mail.com
                        </Typography>
                    </Grid>
                    <Grid container justify={"flex-end"}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </header>
            <Divider />
            <List component='nav'>
                <ListItem div>
                </ListItem>
                <ListItem button onClick={Logout}>
                    <ListItemIcon>
                       <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            </List>
        </>
    );

}