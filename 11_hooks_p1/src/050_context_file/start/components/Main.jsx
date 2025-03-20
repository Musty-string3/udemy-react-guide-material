import { userTheme } from '../context/ThemeContext';

const Main = () => {
    const [ theme ] = userTheme();
    return (
        <main className={`content-${theme}`}>
            <h1>テーマの切り替え</h1>
        </main>
    )
};

export default Main;
