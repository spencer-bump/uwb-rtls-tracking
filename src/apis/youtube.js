import axios from 'axios';
import YOUTUBE_KEY from '../env';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 7,
      key: YOUTUBE_KEY
    }
});

