import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import MediaCard from './components/MediaCard';

function App() {
  return (
    <div className='App'>
      <ResponsiveDrawer>
        <MediaCard />
      </ResponsiveDrawer>
    </div>
  );
}

export default App;
