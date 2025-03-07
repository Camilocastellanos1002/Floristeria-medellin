import { useRoutes } from 'react-router-dom';

import {Home} from '../Pages/Home'
import {ContactUs} from '../Pages/ContactUs'
import {CreateArrangement} from '../Pages/CreateArrangement'
import {Register} from '../Pages/Register'
import {SatisfiedCustomers} from '../Pages/SatisfiedCustomers'
import {SeasonalAdvertising} from '../Pages/SeasonalAdvertising'
import {ShoppingCart} from '../Pages/ShoppingCart'
import {SignIn} from '../Pages/SignIn'
import {Store} from '../Pages/Store'
import { Loading } from '../Pages/Loading'
import { Empty } from '../Pages/Empty'
import {Error} from '../Pages/Error'

function AppRoutes (){
    let routes = useRoutes([

        { path: '/', element: <Home/>},
        { path: '/contact-us', element: <ContactUs/>},
        { path: '/create-arrangement', element: <CreateArrangement/>},
        { path: '/register', element: <Register/>},
        { path: '/satisfied-customers', element: <SatisfiedCustomers/>},
        { path: '/season-advertising', element: <SeasonalAdvertising/>},
        { path: '/shopping-cart', element: <ShoppingCart/>},
        { path: '/sign-in', element: <SignIn/>},
        { path: '/store', element: <Store/>},
        { path: '/loading', element: <Loading/>},
        { path: '/empty', element: <Empty/>},
        { path: '/*', element: <Error/>},   //Cual quier otra ruta diferente a la lista (que se denota con el asterisco), generara error

    ]);
    return(routes);
}

export {AppRoutes}