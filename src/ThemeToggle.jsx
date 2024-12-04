/** Theme toggle component */
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useGlobalContext } from './Context';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      {/* Theme toggle button */}
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
