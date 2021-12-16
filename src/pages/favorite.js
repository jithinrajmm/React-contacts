import Contact from "../components/contact";

export default function Favorite({contacts,favcontact,delcontact}) {
    let count= 0;
  return <div className="row p-5">

      {contacts.map(singelFavContact=>{
          return (singelFavContact.fav === true && <Contact key={singelFavContact.id} singlecontact={singelFavContact} favcontact={favcontact} delcontact={delcontact}></Contact>
            )
      })}
      {contacts.map(singlecontact=>{
          if (singlecontact.fav){
              count += 1
          }
      })}
      {/* we can use a filter method to show the error */}
      {/* {contacts.filter(singlecontact=>{
          return singlecontact.fav === true

      }).length === 0 && <div className="row justify-content-center"><div class="text-center  text-danger containers h2 col-5" role="alert">
      Sorry no fav contact
    </div></div>} */}

    {/* simplify the above code */}
{/* 
    {contacts.filter(singlecontact=>singlecontact.fav===true).length === 0 && <div className="row justify-content-center"><div class="text-center  text-danger containers h2 col-5" role="alert">
            Sorry no fav contact
          </div></div>} */}



      {/* this is my methode to showing the error i created a variable count and set it value 
      used by a map function */}
      {count === 0 && <div className="row justify-content-center"><div class="text-center  text-danger containers h2 col-5" role="alert">
            Sorry no fav contact
          </div></div>}
      
  </div>;
}
