export  const getNewsByApi = async (category = 'all') => {
   let response =  await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=31b289dcfba146d3a34dbef2b580400f`)
   let data = await response.json();

   return data.articles
}