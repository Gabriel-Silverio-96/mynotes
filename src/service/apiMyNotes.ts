import axios from "axios";

const apiMyNotes = axios.create({
    baseURL: process.env.REACT_APP_API_URL_MY_NOTES
})

export default apiMyNotes;