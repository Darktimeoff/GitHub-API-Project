import React from 'react';
import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { About } from './pages/About';
import { Profile } from './pages/Profile';


function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="container pt-4">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/profile/:name" component={Profile} />
				</Switch>
			</div>
		</BrowserRouter>
  );
}

export default App;
