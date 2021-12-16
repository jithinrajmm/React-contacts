export default function Contact({singlecontact,favcontact,delcontact}) {
    console.log(singlecontact.fav,'❤❤❤❤❤❤❤')
    const favoritecontact = ()=>{
        favcontact(singlecontact.id)
    }
    const delContac = ()=>{
        delcontact(singlecontact.id)
    }
  return (
    <>
    <div className="col-md-2   p-2">
      <div className="card ml-5 containers text-white" >
        <div className="card-header text-danger h5" onClick={favoritecontact}>{singlecontact.fav ? "fav": "not fav"} <i  className= {singlecontact.fav ? "fas fa-heart text-danger":"fal fa-heart text-danger "}></i></div>
        <ul className="list-group list-group-flush">
          <li className="list-item cofea">{singlecontact.name}</li>
          <li className="list-item cofea">{singlecontact.phonenumber}</li>
          <li className="list-item cofea">{singlecontact.email}</li>
        </ul>
        <div className="row">
            <div className="col-md-1">
            <button  onClick={delContac} className="btn btn-danger"><i class="fas fa-user-times text-dark"></i></button>
            </div>

        </div>
        
      </div>
      </div>
      
    </>
  );
}
