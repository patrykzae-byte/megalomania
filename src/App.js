import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      KONIEC PRACY
      <div style={{ marginTop: '20px' }}>



        <button onClick={() => setCount(count - 1)}>Odejmij</button>



        <span style={{ margin: '0 10px' }}>Licznik: {count}</span>


        <button onClick={() => setCount(count * 2)}>pomnoz</button>

        <button onClick={() => setCount(count + 1)}>Dodaj</button>
      </div>
    </div>
  );
}

export default App;