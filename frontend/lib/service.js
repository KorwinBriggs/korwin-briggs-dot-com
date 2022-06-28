
import axios from 'axios';

export const backurl = 'http://localhost:1337'

export const fetchFromCMS = async (path) => {
    const url = backurl + '/' + path;
    const res = await axios.get(url);
    return res.data;
  };
  