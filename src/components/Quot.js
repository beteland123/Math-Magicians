import { useEffect, useState } from 'react';

function Quate() {
  const [quate, setQuate] = useState({});
  useEffect(() => {
    const fetchquate = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
          headers: {
            'X-Api-Key': 'FSAUvyMJg/Y3slpTVoMV6Q==E715G6wVjjSzZ2QG',
          },
        });
        const data = await response.json();

        setQuate(data[0], data[1]);
      } catch (error) {
        setQuate('Error fetching quote');
      }
    };

    fetchquate();
  }, []);
  return (
    <div>
      <h2>Quate for You</h2>
      <p>
        Quate   :
        {quate.quote}
      </p>
      <p>
        Author   :
        {quate.author}
      </p>
    </div>
  );
}
export default Quate;
