export async function fetchDataApi() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error('API URL is not defined');
    }
    // const response = await fetch('https://mobile-s2e.singsing.net/record/647874c7e2b001b63b78acdf');
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch song data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching song data:', error);
    throw error;
  }
}