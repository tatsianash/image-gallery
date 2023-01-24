import React, { useEffect, useState } from 'react';
import { Hit } from './apiReturnTypes';
import { Card } from './components/Card';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState<Hit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="container mx-auto">
        <ImageSearch searchText={(text: string) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <div className="text-6xl text-center mx-auto mt-32">
            No results found
          </div>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32"> '...loading'</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <Card key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
