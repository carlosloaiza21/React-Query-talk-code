import {useEffect, useState} from 'react';
import {getAll} from '../api';
import InputComponent from '../Components/InputComponent';
import TableComponent from '../Components/TableComponent';
import Header from '../Components/Header';
import {makeStyles} from '@mui/styles';

//Esta pagina unicamente es para mostrar como se realizan las peticiones sin RQ y hacer una comparacion entre ambas

const TodoPage=()=> {

    const classes=TodoStyle();

    const [isLoading, setLoading]=useState(false)
    const [error, setError]=useState("");
    const [data,setData]=useState([]);

    useEffect(()=>{
        setLoading(true);
        getAll().then((resutl)=>{
            setLoading(false);
            setData(resutl.data);
        }).catch((error)=>{
            setLoading(false);
            setError(error.message)
        })
    },[])

    if(isLoading) return <h1>Loading</h1>
    if(error) return <h1>{error}</h1>

    return (
        <div>
            <Header />
                <h1>React Fetching</h1>
                <div className={classes.root}>
                    <InputComponent onSave={()=>{}}/>
                </div>
                <div>
                    <TableComponent
                        data={data}
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