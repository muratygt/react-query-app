import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import './App.css';

function App() {
  const queryInfo = useQuery('pokemon', async () => { 
    await new Promise(resolve => setTimeout(resolve, 1000))

      if(true) {
        throw new Error('Testing Error State');
      }

      axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.data.results)
    }
  )
  console.log(queryInfo);
  return queryInfo.isLoading ? (
    'Loading'
	) : queryInfo.isError ? 
	queryInfo.error.message : (
	<div className="App">
	{queryInfo.data.map(result => <div key={result.name}>{result.name}</div>)}
	</div>
  );
}

export default App;
