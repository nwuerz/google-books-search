import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Search from './pages/Search';

function App() {
  return (
    <>
    <Nav />
    <Search />
    </>
  );
}

export default App;

//routes
{/* <Switch>
<Route exact path={["/", "/search"]}>
  <Search />
</Route>
<Route >
  <Saved exact path={["/saved"]}/>
</Route>
</Switch>
</> */}