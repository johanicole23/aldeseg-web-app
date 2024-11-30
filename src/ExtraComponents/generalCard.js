import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import generalCard from "../Styles/card";
import text from "../Styles/text";
import button from "../Styles/button";

export default function GeneralCard({ imgUrl, name, description, link }) {
    return (
        <Card sx={generalCard.card}>
            <CardActionArea sx={generalCard.CardActionArea} disabled>
                <CardMedia>
                    <img src={imgUrl} alt={"green iguana"} className='card-Media-Insurance' />
                </CardMedia>
                <CardContent sx={generalCard.cardContent}>
                    <Typography sx={text.textH2Insurance} component="div">
                        {name}
                    </Typography>
                    <Typography sx={text.textH5Insurance} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={generalCard.cardActions}>
                <Button variant="contained" href={link} sx={[button.buttonWhiteText, { width: "100%" }]}>
                    Ver más
                </Button>
            </CardActions>
        </Card>
    );
}