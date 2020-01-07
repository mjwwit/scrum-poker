
export const getResponse = async (url: string) => {
    return await fetch(url)
}

export const postResponse = async (url: string, param:any) =>{
      const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Origin": 'http://localhost:3000',
          },
          body: JSON.stringify(param),
          
    })
    const body = await response
}


