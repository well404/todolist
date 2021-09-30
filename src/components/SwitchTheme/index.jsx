import Switch from '@mui/material/Switch';

import { SwitchThemeContainer } from './style'
const SwitchTheme = ({ changeTheme, ...props }) => {

    return (
        <SwitchThemeContainer>
            <Switch onChange={changeTheme} {...props} />
        </SwitchThemeContainer>
    )
}

export default SwitchTheme