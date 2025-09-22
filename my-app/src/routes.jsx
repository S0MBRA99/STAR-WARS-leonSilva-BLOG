import {createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './pages/home'
import Layout from './pages/layout'

export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
        </Route>
    )
)