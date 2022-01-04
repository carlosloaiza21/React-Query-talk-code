import { Container } from '@mui/material';
import '../App.css';
import Header from './Header';

const PageContainer=({children})=> {
    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                {children}
            </Container>

        </div>
    );
}

export default PageContainer;
