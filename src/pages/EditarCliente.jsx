import {useLoaderData,useActionData, useNavigate,Form,redirect } from "react-router-dom"
import { actualizarDato, obtenerDato } from "../data/data"
import Formulario from "../components/Formulario";
import Error from "../components/Error";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({params}){
    const id = params.clienteId;
    const data = await obtenerDato(`clientes/${id}`)
    if (Object.values(data).length === 0) {
        throw new Response('',{
            status: 404,
            statusText: "No hay resultados"
        })
    }
    return data
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request,params}){
  const formData = await request.formData()
  const id = params.clienteId;
  const email = formData.get("email");
  const telefono = Number(formData.get("telefono"))
  // validacion
  const errores = []
  //const clienteObject = Object.fromEntries(formData)
  const clienteObject = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    empresa: formData.get("empresa")
  }

  if (Object.values(clienteObject).includes('')) {
    errores.push("Todos los campos son obligatorios")
  }

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    errores.push("El email no es valido")
  }
  if (isNaN(telefono)) {
    errores.push("El numero de telefono es incorrecto")
  } else {
    clienteObject.telefono = telefono
  }

  // Retornar errores
  if (Object.keys(errores).length) {
    return errores
  }
  await actualizarDato(clienteObject,`clientes/${id}`)
  return redirect("/clientes")
}

const EditarCliente = () => {
  const data = useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()
  return (
    <>
        <h1 className="text-3xl font-bold text-blue-800">Actualiza Cliente</h1>
        <p className="mt-3">Llena todos los datos para registrar un cliente</p>
        <div className="flex justify-end">
          <button className="bg-blue-700 py-1 px-3 uppercase text-white font-semibold transition-all hover:-translate-y-1 hover:bg-blue-900"
                  onClick={()=> navigate(-1)}>
            Volver
          </button>
        </div>

        <div className="mt-2 bg-white shadow-md w-4/5 mx-auto rounded-md py-2 px-3">
          {
            errores?.length && (
              errores.map((error,index)=> <Error key={index}>{error}</Error> )
            )
          }
          <Form method="PATCH" noValidate>  
            <Formulario cliente={data}/>
            <input className="bg-blue-700 w-full rounded-sm py-1 text-white font-bold cursor-pointer transition-colors hover:bg-blue-900" 
                   type="submit" 
                   value="Actualizar" />
          </Form>
        </div>
    </>
  )
}

export default EditarCliente