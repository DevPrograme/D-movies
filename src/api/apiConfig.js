const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a69474d3a8b52039ab1f09cd4e1a8bea',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;