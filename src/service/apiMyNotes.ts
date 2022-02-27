import axios from "axios";

enum Timeout {
  THIRTY_SECOND = 1000 * 30
}

const apiMyNotes = axios.create({
  baseURL: process.env.REACT_APP_API_URL_MY_NOTES,
  timeout: Timeout.THIRTY_SECOND,
  timeoutErrorMessage: "There was an unexpected problem, your request is taking too long. Try again later"
})

export default apiMyNotes;