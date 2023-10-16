import { reactive } from 'vue';

export const store = reactive({
filmApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=518d61a0bb9d2e62db424731f2e4c7d3&query=yugioh',
tvApiUrl: 'https://api.themoviedb.org/3/search/tv?api_key=518d61a0bb9d2e62db424731f2e4c7d3&query=yugioh',
filmlist:[],
tvlist:[]
});

