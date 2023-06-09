import {sql} from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";




export default async function handler(
    request:NextApiRequest,
    response:NextApiResponse
) {
 
try {
   await sql`CREATE TABLE pictures(
        Name varChar(255),
        Source varChar(255),

    )`
    const names=['dog','cow']
    const sources = ['https://img.freepik.com/free-photo/painting-jungle-scene-with-green-plant-green-leafy-plant_1340-31601.jpg?w=996&t=st=1685871132~exp=1685871732~hmac=02d10e3c324cc4ee9ba9a84f1d0a92b1e6f430d49c1ddbb390d4bb105a7f02bf']
  await sql `INSERT INTO pictures (Name , Source) VALUES (${names[0]} ,${sources[0]})`
  
  
  
} catch (error) {
    return response.status(500).json({error})
}
const result =await sql `SELECT * FROM pictures`
return response.json(result)
}
