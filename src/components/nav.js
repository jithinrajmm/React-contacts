import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="containers">
       <header>
           <h1 className= "logo"><Link className="link" to ="/">CONTACT</Link>  </h1>
           <nav>
               <ul>
                   <li><Link className="link" to="/">HOME</Link></li>
                   <li><Link className='link' to="Favorite">FAVORITE</Link></li>
               </ul>
           </nav>
       </header>
      </div>
    </>
  );
}
