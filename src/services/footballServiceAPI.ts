const baseUrl = "https://api.football-data.org/v4";
const header = {"X-Auth-Token": process.env.API_KEY!};

export async function getReq<T>(endPoint: string): Promise<T>{
  
  const getUrl = await fetch(`${baseUrl}${endPoint}`, {method: "GET", headers: header});
  return getUrl.json()
   
}