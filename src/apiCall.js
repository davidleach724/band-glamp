export const fetchData = (state) => {
  return fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}&stateCode=&api_key=kGRSkY3I2AvcvPikhDRpuyEsUnHxuN47p5n912Pj`)
  .then(response => checkError(response))
  .catch(error => console.log(error))
}

const checkError = (res) => {
  if (!res.ok) {
    throw new Error(
      "Sorry...Internet Server Error"
    )
  } else {
      return res.json()
  }
}