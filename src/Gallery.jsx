/** Gallery with Unsplash images */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './Context';

// Unsplash API URL
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['images', searchValue],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchValue}`);
      if (response.status !== 200)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response.data;
    },
  });

  // Handle states
  if (isLoading)
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  if (isError)
    return (
      <section className='image-container'>
        <h4>Error: {error.message}</h4>
      </section>
    );

  const results = data?.results || [];
  if (results.length < 1)
    return (
      <section className='image-container'>
        <h4>No images found...</h4>
      </section>
    );

  // Render image grid
  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        const { id, alt_description } = item;

        return <img src={url} key={id} alt={alt_description} className='img' />;
      })}
    </section>
  );
};

export default Gallery;
