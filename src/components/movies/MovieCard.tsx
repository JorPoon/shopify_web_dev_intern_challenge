import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface Movie {
    title: string,
    year: number
}

const MovieCard = (props:Movie) => {
    return (
        <Card>
            <CardActionArea>
                {/* <CardMedia/> */}
                <CardContent>
                    <Typography>
                        Title
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                   Nominate
                </Button>
                {/* <Button size="small" color="primary">
                    Learn More
                </Button> */}
            </CardActions>
        </Card>
    )
}


export default MovieCard