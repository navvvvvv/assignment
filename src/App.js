import { Header } from "./components/header";
import { Home } from "./pages/home";
import {Contact} from "./pages/contact";
import { Information } from "./pages/information";
import { Guide } from "./pages/guide";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="">
    {/* multiple page banane ke liye router cahiye hota hai jo react me nhi aata hai uske liye ham third party pakage use karte hai react routery */}
        {/* capital me banana jaruri hai  */}
        <Header />
         
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="information" element={<Information/>}/>
          <Route path="guide" element={<Guide/>}/>
         </Routes>

    </div>
  );
}

export default App;
