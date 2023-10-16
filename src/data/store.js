import { reactive } from 'vue';

export const store = reactive({
filmApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=518d61a0bb9d2e62db424731f2e4c7d3&query=yugioh',
tvApiUrl: 'https://api.themoviedb.org/3/search/tv?api_key=518d61a0bb9d2e62db424731f2e4c7d3&query=yugioh',
filmlist:[],
tvlist:[]
});

/* api array sample film 
link:  https://api.themoviedb.org/3/search/movie?api_key=518d61a0bb9d2e62db424731f2e4c7d3&query=yugioh
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/oYtfiuxCysBgb1NN6ckIsNtTUDo.jpg",
    "genre_ids": [
      16,
      14
    ],
    "id": 72013,
    "original_language": "ja",
    "original_title": "劇場版 遊☆戯☆王 ～超融合！時空を越えた絆～",
    "overview": "After falling through a time-slip, Yusei Fudo (who has just had his powerful card stolen by a mysterious stranger) meets with Jaden Yuki and Yugi Muto, who agree to help Yusei defeat the evil Paradox, who is planning to destroy Pegasus before he can invent Duel Monsters.",
    "popularity": 32.895,
    "poster_path": "/gY8wNEeN50Pmf1GBYBxYo68YBV9.jpg",
    "release_date": "2010-01-23",
    "title": "Yu-Gi-Oh!: Bonds Beyond Time",
    "video": false,
    "vote_average": 6.0,
    "vote_count": 91
  }, */

   /* api array sample series 
  link: https://api.themoviedb.org/3/search/tv?api_key=518d61a0bb9d2e62db424731f2e4c7d3&query=yugioh 
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/nRIRh0TWFdjyeyY0ae6Uc6yuX9M.jpg",
      "genre_ids": [
        10762,
        16,
        10765,
        35
      ],
      "id": 100368,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "遊☆戯☆王SEVENS",
      "overview": "In the not-so-distant future, Goha City is governed by its largest corporation, \"Goha Corp\", everything from schooling, to Dueling rules, to much of daily life.\n\nYuga is a fifth-grader who attends Goha 7th Elementary and develops inventions every day that he calls \"Roads\". He thinks the way Duels are run by adults are way too rigid and uncool, decides to change this world which is too cramped for kids, and battles with his road \"Rush Duel\" while believing in his creations... In the days that follow, Luke from the next class over hears the rumor of a \"King of Duels\". Investigating this with Yuga, they run into a mysterious person standing before an important monument... in order to be recognized as a King of Duels, you've gotta win Duels within a limited time!\n\nThe story of Yuga and Luke, two young boys about to overturn the world of rigid unfun Duels with a new style is about to begin!!",
      "popularity": 62.155,
      "poster_path": "/zfEcbgVnUsnLbpbiEsyAP7vkVWV.jpg",
      "first_air_date": "2020-04-04",
      "name": "Yu-Gi-Oh! SEVENS",
      "vote_average": 4.143,
      "vote_count": 14
    },
 */