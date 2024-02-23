import './App.css';
import { Navbar } from 'react-bootstrap';
import MainNav from './Navbar';
import MainContent from './Content';
import MainFooter from './Footer';
import MainHeader from './Header';
import PhoneTopper from './Phonetopper';

function App() {
  return (
    <div className="Site flex-container">
<PhoneTopper/>
<MainHeader/> 
<MainContent />
<MainFooter/>
<PhoneTopper/>
    </div>
  );
}

export default App;
