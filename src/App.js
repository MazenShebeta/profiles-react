import logo from './logo.svg';
import Profile from './profile';
import './App.css';

function App() {
  return (
    <div className='profiles-section'>
      <Profile fullName='Mazen' />
      <Profile/>
    </div>
  );
}

export default App;
