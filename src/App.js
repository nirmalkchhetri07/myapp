import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='Signup'>
      <h1>Wellcome to signup page.</h1>
      <div className='signup-layout'>
        <label>Full name:</label>
        <input type='Email' id='inp1' placeholder='Enter your Email.'required></input>
        
        <label>Password:</label>
        <input type='password' id='inp1' placeholder='password.'required></input>
     
         <button type='submit' id='btn'required>SignUp</button>
      </div>
    </div>
  );
}

export default App;
