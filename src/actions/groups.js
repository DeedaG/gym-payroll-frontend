export const setMyGroups = groups => {
  return {
    type: "SET_MY_GROUPS",
    groups
  }
}



export const getMyGroups = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/groups",
    {
      credentials: "include",
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyGroups(response.data))
        }
      })
      .catch(console.log)
  }

}
