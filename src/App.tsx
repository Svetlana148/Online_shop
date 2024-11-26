/** The main application component */
import './App.module.css';
import AppLayout from './AppLayout/AppLayout';

/**
 * App component
 *
 * This is the main component of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App: React.FC = () => {
  return (
    <div>
        <AppLayout />
    </div>
  );
}

export default App;
