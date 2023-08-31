
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
function App() {
  return (
   <>
   <Navbar name="TextUtils"/>
   <div className="container my-3">
   <Textbox heading="Enter the text to analyze"/> 
   </div>
  
   </>
  );
}

export default App;
