import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './MediaCard.css';

interface IMediaCardProps {
    Title: string | undefined;
    Vote: string | undefined;
    ImageUrl: string | undefined;
    Description: string | undefined;
    Release: string | undefined;
}

function MediaCard(props: IMediaCardProps) {
    return (
        <div>
            <Card className="MediaCardContainer">
                <CardActionArea>
                    <CardContent className="MediaCardTitle">{props.Title}</CardContent>
                    <CardMedia
                        className="MediaCardImage"
                        image={"https://image.tmdb.org/t/p/w500/" + props.ImageUrl}

                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                            <p><b>Vote Count:</b> {props.Vote} <br /><b>Release Date:</b> {props.Release}</p>{props.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MediaCard