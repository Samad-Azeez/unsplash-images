/** Search form component */
import { useState } from 'react';
import { useGlobalContext } from './Context';

const SearchForm = () => {
  const { searchValue, setSearchValue } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = searchTerm.trim();
    if (!newValue) return;
    setSearchValue(newValue);
    setSearchTerm('');
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
