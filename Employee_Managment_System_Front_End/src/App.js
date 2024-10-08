
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route, Routes}from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
// import UpdateEmployeeComponent from './components/updateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
       <div>
          <Router>
           

              <HeaderComponent/>
                  <div className = "container">
                   <Routes> 
                    <Route path='/' exact element = {<ListEmployeeComponent/>}></Route>
                    <Route path = '/employees' element = {<ListEmployeeComponent/>}></Route>
                    {/* // step 1 */}
                    <Route path = '/add-employee/:id' element = {<CreateEmployeeComponent/>}></Route>
                    {/* <Route path = '/update-employee/:id' element = {<CreateEmployeeComponent/>}></Route> */}
                {/* step 2 */}
                  <Route path='/view-employee/:id' element = {<ViewEmployeeComponent/>}></Route>

                     
                   </Routes>
                  </div> 
              <FooterComponent/>
           
          </Router>
         </div>
  );
}

export default App;
