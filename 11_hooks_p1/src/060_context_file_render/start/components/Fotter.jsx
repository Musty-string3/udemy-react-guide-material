import { useUpdateTheme } from "../context/ThemeContext"

const Footer = () => {
    const setTheme = useUpdateTheme();
    console.log("Footer");

    return (
        <footer>
            <h1>Footer</h1>
        </footer>
    );
};

export default Footer;
