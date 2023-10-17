import { reactive } from 'vue';

export const store = reactive({
apiUrl: 'https://api.themoviedb.org/3/search',
apiParams: {
  api_key: '518d61a0bb9d2e62db424731f2e4c7d3',
  query: '',
  language: 'it-IT'
},
movie:[],
tv:[]
});

