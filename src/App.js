import './App.css';
import './component/NavigationBar'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./Scene/MainPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NavigationBar from "./component/NavigationBar";
import Profile from "./Scene/Profile";
import Error from "./Scene/Error";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <NavigationBar />
        <Routes>
          <Route path={'/'}>
            <Route index element={<MainPage />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
