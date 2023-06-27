import axios from "axios"
import baseUrl from "./Baseurl"

export function automation() {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/`)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  }
  )

}
