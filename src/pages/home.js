import Form from "../components/forms";
import Contact from "../components/contact";

export default function Home({ formData, contacts,favcontact,delcontact }) {
  return (
      <>
    <div className="row justify-content-center ">
      <div className="col-md-4 text-center">
        <Form formData={formData}></Form>
      </div>
     
      
    </div>
     <div className="row p-5">
     
         {contacts.map(singleContact=>{
             return <Contact key={singleContact.id} singlecontact={singleContact} favcontact={favcontact} delcontact={delcontact}></Contact>
         })}
          {contacts.length === 0 && <div className="row justify-content-center"><div class="text-center  text-danger containers h2 col-5" role="alert">
            Sorry no  contact
          </div></div>}
         
     
 </div>
 </>
  );
}
