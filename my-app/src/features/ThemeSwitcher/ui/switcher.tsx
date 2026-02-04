import {useContext} from 'react';
import {ThemeContext} from '../../../shared/lib/theme/context.ts';
import Button from '../../../shared/components/Button.tsx';

export default function ThemeSwitcher() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;

    const {theme, toggleTheme} = themeContext;
    const themeLabel: 'DARK' | 'LIGHT' = theme === 'light' ?'DARK' : 'LIGHT';

    return (
        <Button
            onClick={toggleTheme}
            baseButton={false}
            className={'switch-theme'}
        >
            {themeLabel}
        </Button>
    )
}