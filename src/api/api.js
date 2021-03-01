const api_key = "MSDLGYA8OpPynna2m7urt6wIbbh1";

// Old match list api
export const getMatches = () => {
    const url = `https://cricapi.com/api/matches/?apikey=${api_key}`;
    return fetch(url)
    .then((Response) => Response.json())
    .catch((Error) => console.log("Error : ", Error));
}

// Show match details.
export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore/?apikey=${api_key}&unique_id=${id}`;

    return fetch(url)
    .then((Response) => Response.json())
    .catch((Error) => console.log(Error));
}