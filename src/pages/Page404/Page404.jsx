import { NavLink } from "react-router-dom"

import "./Page404.css"

const Page404 = () => {
  return (
    <div className="ContainerPage404">
      <h1>Pagina não encontrada.</h1>
      <h1> <span className="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
      <NavLink to='/' >Home</NavLink>
    </div>
  )
}

export default Page404