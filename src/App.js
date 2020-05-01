import React, { useState } from 'react';
import './App.css';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'ap-southeast-2_BYjfnSZ8P',
    ClientId: '2rh6gnqbh3i5tsjes2qccqihqi',
  };

  const UserPool = new CognitoUserPool(poolData);

  const onSumbit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.log('error>>', err);
      console.log('data>>', data);
    });
  };
  return (
    <div className="App">
      <form onSubmit={onSumbit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default App;
