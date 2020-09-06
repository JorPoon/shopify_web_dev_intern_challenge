import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useCardStyle = makeStyles({
    root: {
    //   minWidth: '250px',
      width: '300px',
      margin: '10px 0'
    },
    media: {
        paddingTop: '56.25%',
        height: '450px'
    }
  });
  


interface Movie {
    title: string,
    year: string,
    key: string,
    poster: string,
    nominate: any
}

const MovieCard = (props:Movie) => {
    const classes = useCardStyle()
    const [isNominated, setIsNominated] = useState(false)

    const nominateMovie = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const nominated = {
            title: props.title,
            year: props.year,
            nominated: true
        }
        setIsNominated(true)
        props.nominate(nominated)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography variant='h5' align='center'>
                        {props.title}
                    </Typography>
                    <Typography variant='h6' align='center'>
                        {props.year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {isNominated && <Button disabled variant='contained' size='small' color='secondary' onClick={(event) => nominateMovie(event)}>
                                    Nominate
                                </Button> }
                {!isNominated && <Button variant='contained' size='small' color='primary' onClick={(event) => nominateMovie(event)}>
                                    Nominate
                                </Button> }
            </CardActions>
        </Card>
    )
}


export default MovieCard