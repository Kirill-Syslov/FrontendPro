import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../../redux/thunks/swapiThunks';
import { clearData } from '../../redux/slices/swapiSlice';

const Swapi = () => {
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((state) => state.swapi);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFetch = () => {
    dispatch(fetchPeople(inputValue));
  };

  return (
    <div>
      <h1>Swapi People</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter ID 1..."
      />
      <button onClick={handleFetch}>Get Info</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearData())}>Clear Data</button>
    </div>
  );
};

export default Swapi;

