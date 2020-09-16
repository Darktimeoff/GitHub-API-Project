import React from 'react';
import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert';
import { Context } from './context/Context';


function App() {
	return (
		<Context>
			<BrowserRouter>
				<NavBar />
				<div className="container pt-4">
					<Alert alert={{text: 'test alert'}}/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/profile/:name" component={Profile} />
					</Switch>
				</div>
			</BrowserRouter>
		</Context>
  );
}

export default App;
