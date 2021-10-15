import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Personagens from './pages/Personagens';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Personagens } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
