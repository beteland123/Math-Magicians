import { useEffect, useState } from 'react';

function Quate() {
  const [quate, setQuate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        setLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setLoading(false);
      }
    };

    fetchquate();
  }, []);
  if (loading) {
    return (<p>loading ...</p>);
  }
  if (error !== null) {
    return (<p>{error}</p>);
  }
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
