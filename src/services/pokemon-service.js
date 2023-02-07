import axios from 'axios';

const BASE_URI = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon';

const getPokemon = () => {
    return axios.get(`${BASE_URI}/?idAuthor=1`);
};

const getPokemonById = id => {
    return axios.get(`${BASE_URI}/${id}`);
};

const postCreatePokemon = payload => {
    return axios.post(`${BASE_URI}/`, payload);
};

const putUpdatePokemon = (id, payload) => {
    return axions.put(`${BASE_URI}/${id}`, payload);
};

const deletePokemon = id => {
    return axions.delete(`${BASE_URI}/${id}`);
};

export const { getPokemon, getPokemonById, postCreatePokemon };
