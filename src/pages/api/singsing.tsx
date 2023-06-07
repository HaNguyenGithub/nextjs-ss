import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse){
    try {
      const apiUrl = process.env.API_URL
      if (!apiUrl) {
        throw new Error('API_URL is not defined in environment variables');
      }
        const apiResponse = await fetch(apiUrl);
    
        if (!apiResponse.ok) {
          throw new Error('Failed to fetch data from API');
        }
    const data = await apiResponse.json();
    const { song, link_play } = data.data;
    // const test = data.data.song.name;
    console.log(song);
    res.status(200).json({link_play: link_play, song: song });
} catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
