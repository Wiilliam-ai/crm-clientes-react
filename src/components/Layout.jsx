import { Outlet,Link,useLocation } from "react-router-dom";
import { BiHomeAlt2,BiGroup,BiUserPlus } from "react-icons/bi";

const Layout = () => {
  const location = useLocation()
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-xl font-bold text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-3 flex flex-col">
          <Link className={`text-white transition-all border-b hover:rounded-sm hover:bg-white hover:text-blue-700 flex gap-x-3 items-center p-2 ${location.pathname === '/'&& 'font-bold bg-blue-950'}`} 
             to="/">
            <BiHomeAlt2/>
            <span className="mt-1">Inicio</span>
          </Link>
          <Link className={`text-white transition-all border-b hover:rounded-sm hover:bg-white hover:text-blue-700 flex gap-x-3 items-center p-2 ${location.pathname === '/clientes'&& 'font-bold bg-blue-950'}`} 
             to="/clientes">
            <BiGroup/>
            <span className="mt-1">Clientes</span>
          </Link>
          <Link className={`text-white transition-all border-b hover:rounded-sm hover:bg-white hover:text-blue-700 flex gap-x-3 items-center p-2 ${location.pathname === '/clientes/nuevo'&& 'font-bold bg-blue-950'}`} 
             to="/clientes/nuevo">
            <BiUserPlus/>
            <span className="mt-1">Nuevo cliente</span>
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
