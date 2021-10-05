import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { addCommentThunk } from './store/modules/user/thunks'
import { useState } from 'react';


function App() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user.comments)

  const [comment, setComment] = useState();

  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <input value={comment} onChange={e => setComment(e.target.value)} />
        <button onClick={() => {
          dispatch(addCommentThunk(comment))
          setComment("")
        }}>New Comment</button>
        <hr />
        {user.map((user) => {
          return (
            <div>
              <h1>{user}</h1>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
