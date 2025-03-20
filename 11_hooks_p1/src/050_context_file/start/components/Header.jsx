import { userTheme } from '../context/ThemeContext';

const Header = () => {
    const [ theme, setTheme ] = userTheme();
    const THEMES = ['light', 'dark', 'red'];
    const changeTheme = (e) => setTheme(e.target.value);

    return (
        <header className={`content-${theme}`}>
            {
                THEMES.map(_theme => {
                    return (
                    <label key={_theme} htmlFor={_theme}>
                        <input id={_theme} key={_theme} type="radio" value={_theme} checked={ theme === _theme }
                        onChange={changeTheme}
                        />
                        {_theme}
                    </label>
                    )
                })
            }
        </header>
    )
};

export default Header;
