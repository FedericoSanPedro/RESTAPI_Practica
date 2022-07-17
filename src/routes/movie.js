const { Router } = require('express');
const router = Router();
const under = require('underscore');

const movies = require('../sample.json');

router.get('/', (req,res) =>{
    res.json(movies);
});

router.post('/', (req,res) => {
    const { title, director, year } = req.body;
    if(title && director && year){
        const id = movies.lenght + 1;
        const newMovie = {...req.body};
        movies.push(newMovie);
        res.json(movies);
    }
    else{
        res.json({error: 'peticion erronea'});
    } 
});

router.delete('/:id', (req,res) => {
    const { id }= req.params;
    under.each(movies, (movie, i) => {
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
});

router.put('/:id', (req,res) => {
    const { id }= req.params;
    const { title, director, year } = req.body;
    if(title && director && year){
        under.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
            }
        });
        res.json(movies);
    }else {
        res.status(500).json({error: 'peticion erronea'});
    }
});

module.exports = router;