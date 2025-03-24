export const PROFILE_IMG =
  "https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbwdSFv3QFDRDc0BknR3lQSOf7GFR9V54jw7TWVBwmyoYbTSbFRAi95ZEYeYPr1_7ZBXM4aGr0gv0r4HY4Ma2IEmL9bsUWE.png?r=a16";
export const BACK_DROP =
  "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
  },
};

export const MOVIE_IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPEN_AI_KEY =import.meta.env.REACT_APP_OPENAI_API_KEY;
