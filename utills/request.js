const API_KEY = process.env.API_KEY

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rared?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&width_genres=28`
    },
    fetchComedyMovie:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&width_genres=35`
    },
    fetchHorrorMovies:{
        title:'Top Rated',
        url:`/discover/movie?api_key=${API_KEY}&width_genres=27`
    },
    fetchRomanceMovies:{
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&width_genres=10749`
    },
}