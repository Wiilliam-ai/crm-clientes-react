import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
        <h2 className="text-blue-700 text-3xl font-bold text-center">CRM - Cliente</h2>
        <p className="text-red-600 text-center">
            {error.statusText}
        </p> 
    </>
  )
}

export default ErrorPage