import InputComponent from '../Components/InputComponent';
import TableComponent from '../Components/TableComponent';
import Header from '../Components/Header';
import {makeStyles} from '@mui/styles';
import { Button } from '@mui/material';
import {getAll, createTodo, deleteTodo} from '../api';
import { useQuery, useMutation, useQueryClient } from 'react-query';


const TodoPage=()=> {

    const classes=TodoStyle();

    const client=useQueryClient();

    const {isLoading,error,data,refetch} =useQuery('fetchTodos',getAll,{
        select:(res)=>{
            return res.data
        },
        staleTime:15000

    });

    const createMutation=useMutation(createTodo);
    const deleteMutation=useMutation(deleteTodo);

    const save=(item)=>{
        createMutation.mutate(item,{
            onSuccess:()=>{
                client.invalidateQueries('fetchTodos')
            }
        })
    }

    const deleteItem=(id)=>{
        deleteMutation.mutate(id,{
            onSuccess:()=>{
                client.invalidateQueries('fetchTodos')
            }
        })
    }

    if(isLoading) return <h1>Loading</h1>
    if(error) return <h1>{error.message}</h1>

    return (
        <div>
            <Header />
                <h1>React Query Fetching</h1>
                <div className={classes.root}>
                    <InputComponent onSave={save}/>
                </div>
                <Button onClick={refetch}>Get todos</Button>
                <div>
                    <TableComponent
                        data={data}
                        onDelete={deleteItem}
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