
import {Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import TodoList from './components/TodoList';





export default function App() {
  return (
    <div>
      <Link exact className='to-link' to='/list'>My Todo List</Link>
      
      <Switch>
          <Route exact path='/list' component = {TodoList}/>

      </Switch>

    </div>
  );
}
