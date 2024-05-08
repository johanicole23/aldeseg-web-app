import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import text from '../Styles/text';
const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function CustomSelect({ names, onSelect, label , widthCustom}) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setPersonName(selectedValue);
        onSelect(selectedValue);
    };

    return (
        <FormControl sx={{ width: widthCustom }}>
            <InputLabel id="demo-name-label" sx={text.textFieldH6} >{label}</InputLabel>
            <Select
                labelId="demo-name-label"
                id="demo-name"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label={label} sx={text.selectTextFieldFocusedH6} />} // Aquí se cambia el color del textfield select
                MenuProps={MenuProps}
                
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                    >
                        <Typography sx={text.textFieldH6} >{name}</Typography>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
