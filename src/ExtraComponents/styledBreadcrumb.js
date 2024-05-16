import React from "react";
import { Chip, emphasize, styled } from "@mui/material";
import myTheme from "../Styles/myTheme";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = myTheme.palette.common.customYellowTransparent;
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: myTheme.palette.common.customDarkBlue,
        fontWeight: theme.typography.fontWeightBold,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
        fontFamily: 'Encode Sans Semi Condensed',
        
    };
});

export default StyledBreadcrumb;