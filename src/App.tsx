// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import UserStats from './components/UserStats';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todo">TodoList</Link>
            </li>
            <li>
              <Link to="/user">User Stats</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user" element={<UserStats />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
