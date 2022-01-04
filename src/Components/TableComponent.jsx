import { Table, TableHead, TableBody, TableRow, TableCell, Card, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const TableComponent=({data, onDelete})=>{

    return (
        <Card className="tableContent">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {
                            data.map((item)=>{
                                return(
                                    <TableRow key={Math.random()}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                onClick={()=>onDelete(item.id)}
                                            >
                                                <HighlightOffIcon
                                                    color="warning"
                                                    fontSize="medium"
                                                />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
            </Table>
        </Card>
    )
}

export default TableComponent;