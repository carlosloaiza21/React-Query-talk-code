import '../App.css';
import { Link as RouterLink } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { AppBar, Toolbar, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles';


const Header=()=> {

    const classes=useStyles();

    return (

            <AppBar position='sticky'>
                <Toolbar>
                    <ListAltIcon />
                    <Typography>
                        <RouterLink className={classes.link} to='/'>Home</RouterLink>
                    </Typography>
                    <ListAltIcon />
                    <Typography>
                        <RouterLink className={classes.link} to='/react'>Todo React</RouterLink>
                    </Typography>
                    <ListAltIcon />
                    <Typography>
                        <RouterLink className={classes.link} to='/react-query'>Todo React Query</RouterLink>
                    </Typography>
                </Toolbar>
            </AppBar>
);
}

const useStyles=makeStyles({
    root:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'start',
        position:'relative'
    },
    link:{
        margin:20,
        textDecoration:'none',
        color:"#fff",
        fontSize:'2vh'

    }
})

export default Header;
