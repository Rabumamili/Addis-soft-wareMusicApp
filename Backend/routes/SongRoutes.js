import express from 'express';

import { createSong,listSongs,updateSong,removeSong,returnStatistics } from '../controllers/SongControllers.js';
const router = express.Router();
router.get('/', listSongs)
router.post('/', createSong)
router.put('/:id',updateSong )
router.delete('/:id',removeSong )
router.get('/stats', returnStatistics)

export default router;