import InputComponent from '../Components/InputComponent';
import TableComponent from '../Components/TableComponent';
import Header from '../Components/Header';
import {makeStyles} from '@mui/styles';
import { Button } from '@mui/material';
import {getAll, createTodo, deleteTodo} from '../api';
import { useQuery, useMutation, useQueryClient } from 'react-query';

/*

    ReactQuery trabaja peticiones Get con Query(useQuery) y post con Mutation(useMutation)

    UseQuery es el hook que se va a encargar de realizar y gestionar las respuestas de las peticiones
    UseQuery acepta 2 parametros principales: el string que RQ utilizara para identificar el cache internamente
    y el segundo que es la funcion que retorna una promesa es importante mencionar que unicamente pasamos la funcion
    mas no la ejecucion de la misma ya que react-query se encargara de realizar estas peticiones conforme a las configuraciones
    que le pasemos como 3er parametro(opcional) o a las configuraciones que RQ tiene por default en caso de no pasarle este
    3er parametro

    Algunas configuraciones que se pueden pasar como 3er parametro pueden ser: staleTime, CacheTime, retry...

    UseQuery se puede desestructurar para obtener cierta informacion de la ejecucion de la peticion por ejemplo
    isLoading, data, error, refetch...

    useMutation recibe la funcion que va a ejectar la peticion Post(Post Put Delete) y un segundo parametro con opciones
    en este ejemplo solo se mostro la propiedad onSuccess

    UseQueryClient es para poder tener acceso al cliente de RQ y poder manipular el cache de ser necesario en este ejemplo
    se invalido el cache para que react query realizara una nueva peticion y volviera a realizar la peticion y se actualizara la
    vista

*/
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