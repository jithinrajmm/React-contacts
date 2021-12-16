import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Favorite from "./pages/favorite";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Nav from "./components/nav";
import { useState, useEffect } from "react";
import Notfound from "./pages/notFound";

function App() {
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let contactFromJson = await dataJson();
      setcontacts(contactFromJson);
    };
    getData();
  }, []);

  const formData = async (data) => {
    let response = await fetch("http://localhost:3004/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let newData = await response.json();
    setcontacts([...contacts, newData]);
  };

  const dataJson = async () => {
    let response = await fetch("http://localhost:3004/contacts");
    let data = await response.json();

    return data;
  };
  //taking the favorite contact and chage the value of fav false to true or true to false
  // for that create another function its taking the signle contact from the db.json file
  // based on the id provided

  const getdata = async (id) => {
    let response = await fetch(`http://localhost:3004/contacts/${id}`);
    let singlecontact = await response.json();

    return singlecontact;
  };

  const favcontact = async (id) => {
    let singleContactFromServer = await getdata(id);

    let updatedContact = {
      ...singleContactFromServer,
      fav: !singleContactFromServer.fav,
    };

    let response = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedContact),
    });
    if (response.status === 200) {
      let favc = contacts.map((singlecontact) => {
        return singlecontact.id === id
          ? { ...singlecontact, fav: !singlecontact.fav }
          : singlecontact;
      });
      setcontacts(favc);
      // console.log(contacts,"❤❤❤❤❤❤❤")
    }
  };
  const delcontact = async (id) => {
    let response = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      let newcontact = contacts.filter((singlecontactdel) => {
        return singlecontactdel.id !== id && singlecontactdel;
      });
      setcontacts(newcontact);
    }
  };
  return (
    <div className="">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home
              formData={formData}
              contacts={contacts}
              favcontact={favcontact}
              delcontact={delcontact}
            ></Home>
          </Route>
          <Route exact path="/Favorite">
            <Favorite
              contacts={contacts}
              favcontact={favcontact}
              delcontact={delcontact}
            ></Favorite>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
