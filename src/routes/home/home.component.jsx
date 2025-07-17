import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component"
import HomePage from "../../components/home-page/home-page.component";

const Home = () => {

 
  return (
    <div>

       <HomePage/>

       <Directory/>
       <Outlet/>
    </div>
       
  )
}

export default Home;
