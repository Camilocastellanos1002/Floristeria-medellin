import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
function Home(){
    return(
        <>
            <Layout className='Home'>
                <p className='message bg-rose-500'>Bienvenido!</p>
                <Card/>
            </Layout>    
        </>
    );

}

export {Home};