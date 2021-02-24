import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Posts from './components/Posts';
import About from './components/About';
import Contact from './components/Contact';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/" exact>
            <Posts />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
