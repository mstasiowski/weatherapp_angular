


export interface Root {
days: days[]
address: address
description:desc
}

export interface days {
    conditions: string
    datetime: string,
    tempmax: number,
    tempmin: number,
    temp: number,
    humidity: number,
    windspeed: number
}   
    
export interface address {
    address: string
    }

export interface desc
    {
        description: string;
    }
 