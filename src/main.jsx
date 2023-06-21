import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import NuevoCliente,{action as nuevoClienteAction} from './pages/NuevoCliente'
import Index from './pages/Index'
import Cliente,{loader as clientesLoader} from './pages/Cliente'
import EditarCliente,{loader as editarClienteLoader,action as editarClienteAction} from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import {action as eliminarClienteAction} from './components/RowTable'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Index/>
      },{
        path: 'clientes',
        element: <Cliente/>,
        loader: clientesLoader
      },
      {
        path:'clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      },
      {
        path: 'clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        errorElement: <ErrorPage/>,
        action: editarClienteAction
      },
      {
        path: 'clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
