import InputComponent from '../Components/InputComponent';
import TableComponent from '../Components/TableComponent';
import Header from '../Components/Header';
import {makeStyles} from '@mui/styles';
import { Button } from '@mui/material';

const TodoPage=()=> {

    const classes=TodoStyle()


    return (
        <div>
            <Header />
                <h1>React Query Fetching</h1>
                <div className={classes.root}>
                    <InputComponent onSave={()=>{}}/>
                </div>
                <Button onClick={()=>{}}>Get todos</Button>
                <div>
                    <TableComponent
                        data={[]}
                        onDelete={()=>{}}
                    />
                </div>

        </div>
  );
}

const TodoStyle=makeStyles({
    root:{
        background:'#ff000052',
        height:'150px',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    }
})

export default TodoPage;