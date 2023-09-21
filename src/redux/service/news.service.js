export  const getNewsByApi = async (category = 'all') => {
   let response =  await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=8356a3176673446d9993b1ec3a8233cd`)

   let data = await response.json();

   return data.articles
}