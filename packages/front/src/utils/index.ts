import isNode from 'detect-node'

export const getParamsFromUrl = (path: string) => {
  return new URL(path, 'http://ru.ru').searchParams;
};



export const setToken = (token) => {
!isNode && localStorage.setItem('token', token)
}

export const getToken = () => {
  return !isNode && localStorage.getItem('token')
}

export const removeToken = () => {
  !isNode && localStorage.removeItem('token')
}

export const setUserId = (token) => {
  !isNode && localStorage.setItem('id', token)
  }
  
  export const getUserId = () => {
    return !isNode && localStorage.getItem('id')
  }
  
  export const removeUserId = () => {
    !isNode && localStorage.removeItem('id')
  }