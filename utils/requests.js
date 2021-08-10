const API_KEY = "e41ee8fb21ab4dcee5051c4740d68ebf";

export default {
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-Us`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchMystery:{
        title:"Mystery",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchMystery:{
        title:"Mystery",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title:"Western",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetcTV:{
        title:"TV Movie",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
 
};