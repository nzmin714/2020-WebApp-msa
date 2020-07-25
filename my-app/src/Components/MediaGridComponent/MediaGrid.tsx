import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    original_title: string;
    backdrop_path: string;
    vote_average: string;
    overview: string;
    release_date: string;
}
interface IMediaGridProps {
    SearchQuery: (string | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ original_title: "", backdrop_path: "", vote_average: "", overview: "", release_date: "" }]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=a203833094c82d1d04d6053a159fe631&language=en-US&query=' + props.SearchQuery + '&page=1&include_adult=false')
            .then(response => response.json())
            .then(response => {
                setItemArray(response.results)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);

    var Cards: JSX.Element[] = [];

    if (ItemArray) {
        ItemArray.forEach((el: IState, i: Number) => {
            if (!el) {
                return;
            }
            Cards.push(
                <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="MediaGridCard">
                    <MediaCard Title={el.original_title} ImageUrl={el.backdrop_path} Description={el.overview} Vote={el.vote_average} Release={el.release_date} />
                </Grid>)
        })
    }



    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid