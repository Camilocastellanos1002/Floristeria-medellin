import { useRoutes } from 'react-router-dom';

import {Home} from '../Pages/Home'
import {ContactUs} from '../Pages/ContactUs'
import {CreateArrangement} from '../Pages/CreateArrangement'
import {Register} from '../Pages/Register'
import {SatisfiedCustomers} from '../Pages/SatisfiedCustomers'
import {SeasonalAdvertising} from '../Pages/SeasonalAdvertising'
import {Shopping} from '../Pages/Shopping'
import {SignIn} from '../Pages/SignIn'
import {Store} from '../Pages/Store'
import { Loading } from '../Pages/Loading'
import { Empty } from '../Pages/Empty'
import {Error} from '../Pages/Error'
import { YourPurchases } from '../Pages/YourPurchases';

function AppRoutes (){
    let routes = useRoutes([
        // {path: '/', element: <Home/>},
        { path: '/', element: <Store/>},
        { path: '/contact-us', element: <ContactUs/>},
        { path: '/create-arrangement', element: <CreateArrangement/>},
        { path: '/register', element: <Register/>},
        { path: '/satisfied-customers', element: <SatisfiedCustomers/>},
        { path: '/season-advertising', element: <SeasonalAdvertising/>},
        { path: '/shopping-cart', element: <Shopping/>},
        { path: '/your-purchases', element: <YourPurchases/>},
        { path: '/your-purchases/last', element: <Shopping/>},
        { path: '/your-purchases/:id', element: <Shopping/>},
        { path: '/sign-in', element: <SignIn/>},
        { path: '/loading', element: <Loading/>},
        { path: '/empty', element: <Empty/>},
        { path: '/*', element: <Error/>},   //Cual quier otra ruta diferente a la lista (que se denota con el asterisco), generara error

        //paths para realizar el filtrado por categoria pero que se vea reflejado sobre store y no crear otras pages
        { path: '/amor-y-romance', element: <Store/>},
        { path: '/cumpleaños', element: <Store/>},
        { path: '/aniversario', element: <Store/>},
        { path: '/condolencias', element: <Store/>},
        { path: '/grados', element: <Store/>},
        { path: '/desayunos', element: <Store/>},

    ]);
    return(routes);
}

export {AppRoutes}