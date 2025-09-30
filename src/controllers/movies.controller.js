import MovieModel from "../models/movies.model.js";

class MovieController {
    async findAll(req, res) {
        try {
            const movies = await MovieModel.findAll();

            return res.status(200).json(movies);
        } catch (error) {
            console.error("Error finding all movies", error);
            return res
                .status(500)
                .json({ message: "Error finding all movies", error });
        }
    }

    async create(req, res) {
        try {
            const { title, category, duration, sinopsis, releaseYear } = req.body;

            // Validação básica
            if (!title || !category || !duration || !sinopsis || !releaseYear) {
                return res.status(400).json({
                    error: "All fields are required!",
                });
            }

            const data = {
                title,
                category,
                duration,
                sinopsis,
                releaseYear,
            };

            const newMovie = await MovieModel.create(data);

            return res.status(201).json({
                message: "New movie successfully created!",
                newMovie,
            });
        } catch (error) {
            console.error("Error creating a new movie", error);
            res.status(500).json({ error: "Error creating a new movie" });
        }
    }
}

export default new MovieController();