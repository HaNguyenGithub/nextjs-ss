export async function fetchDataApi(id: any) {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${id}`;
    if (!apiUrl) {
      throw new Error('API URL is not defined');
    }
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}