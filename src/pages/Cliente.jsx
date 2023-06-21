import { useLoaderData } from "react-router-dom";
import RowTable from "../components/RowTable";
import { obtenerDatos } from "../data/data";
// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
    const datos = obtenerDatos("clientes")
    return datos;
}

const Cliente = () => {
  const datos = useLoaderData()
  return (
    <>
        <h1 className="text-3xl font-bold text-blue-800">Clientes</h1>
        <p className="mt-3">Administra tus clientes</p>
        <div className="mt-2">
            <table className="w-full bg-white rounded-md shadow-xl">
                <thead>
                    <tr className="bg-blue-800 text-white">
                        <th className="p-1">Nombre</th>
                        <th className="p-1 ">Telefono</th>
                        <th className="p-1 hidden md:block">Email</th>
                        <th className="p-1 ">Empresa</th>
                        <th className="p-1">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.length && (
                            datos.map(cliente =>{
                                return <RowTable key={cliente.id} cliente={cliente}/>
                            })
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Cliente