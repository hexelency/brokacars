// import { headers } from "next/headers"






export const getAddress = async(source: string) =>{

    const result = fetch("/api/search-address?q=" + source ,
        {
            headers:{
                "Content-Type":"application/json",
            }
        }
    )

  }