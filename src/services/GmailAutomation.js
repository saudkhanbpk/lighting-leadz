import axios from "axios"
import baseUrl from "./Baseurl"

export function automation() {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}/`, {
      "email": "lola@email-alomarstaffing.com",
      "password": "846h\\BSj{bkd.9@r",
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  }
  )

}
