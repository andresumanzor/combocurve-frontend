import { withApiRequestHandler } from '@shared/helpers/with-api-request-handler';
import { moviesApi } from '../external-api/movies.api';

export default withApiRequestHandler({
    get: async (req, res) => {
        const { movieId } = req.query;

        if (!movieId) {
            return res.status(400).json({ message: 'Missing movieId' });
        }

        const result = await moviesApi.fetchMovie(parseInt(String(movieId), 10));
        return res.status(200).json(result);
    },
    put: async (req, res) => {
        try {
            const movie = await moviesApi.updateMovie(req.body);

            return res.status(200).json({ message: 'Movie updated successfully', data: movie });
        } catch (e) {
            return res.status(400).json({ message: 'Error updating movie' });
        }
    },
});
