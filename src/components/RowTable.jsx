import { useNavigate,Form,redirect } from "react-router-dom";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import PropTypes from 'prop-types'
import { eliminarDato } from "../data/data";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({params}){
  const id = params.clienteId;
  await eliminarDato(`clientes/${id}`)
  return redirect("/clientes")
}

const RowTable = ({cliente}) => {
  const {nombre,telefono,email,empresa,id} = cliente
  const navigate = useNavigate();
  return (
    <>
      <tr className="border-b-2">
        <td className="p-2">{nombre}</td>
        <td className="p-2 text-center border-x-2">{telefono}</td>
        <td className="p-2 text-center hidden border-r-2 md:block">{email}</td>
        <td className="p-2 text-center border-r-2">{empresa}</td>
        <td className="p-2">
          <div className="flex justify-center gap-x-4 text-xl">
            <button className="transition-colors hover:text-yellow-600"
                    onClick={()=> navigate(`/clientes/${id}/editar`)}>
              <BiEditAlt />
            </button>
            <Form method="POST" 
                  action={`/clientes/${id}/eliminar`}
                  onSubmit={ e =>{
                    if (!confirm("Desea eliminar este registro")) {
                      e.preventDefault()
                    }
                  } }>
              <button className="transition-colors hover:text-red-600">
                <BiTrash />
              </button>
            </Form>
          </div>
        </td>
      </tr>
    </>
  );
};

RowTable.propTypes = {
    cliente: PropTypes.object
}

export default RowTable;
