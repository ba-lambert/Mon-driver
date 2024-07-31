 // ThemeToggle.tsx
import { useTheme } from './ThemeContext'; // Ensure the correct path
import { GiMoon } from 'react-icons/gi';
import { RiSunLine } from 'react-icons/ri';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-800 h-full p-3 rounded-full mx-5 dark:bg-gray-100"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <GiMoon size={16} color='white' />
      ) : (
        <RiSunLine size={16} />
      )}
    </button>
  );
};

export default ThemeToggle;
