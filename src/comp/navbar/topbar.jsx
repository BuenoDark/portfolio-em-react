import "./nav.css"

export default function Topbar() {

  function scroll(id){
    document.getElementById(id).scrollIntoView()

  }


  return (
    <header className='Topbar'>
      {/* <p>
      Portfólio em React
      </p> */}
      <ul className="headermenu">
        <li className="headeritemmenu" onClick={()=>scroll("intro")}>Intro</li>
        <li className="headeritemmenu" onClick={()=>scroll("about")}>Sobre mim</li>
        <li className="headeritemmenu" onClick={()=>scroll("prodlist")}>Projetos</li>
        <li className="headeritemmenu" onClick={()=>scroll("contact")}>Contato</li>
      </ul>
          </header>
  )
}