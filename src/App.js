import './App.css';
import DashboardLayout from './Components/DashboardLayout';
import Header from './Components/Header';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
    <div className="flex-1 flex flex-col">
      <Header />
      <DashboardLayout />
    </div>
  </div>
  );
}

export default App;
