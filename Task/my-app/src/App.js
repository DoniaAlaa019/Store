import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";


function App() {
  return ( <>

   <div>
      < NavBar/>
      < Home />
      < Footer />
    </div>

</>
  );
}

export default App;