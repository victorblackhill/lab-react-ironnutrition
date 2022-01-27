import React,{useState} from "react"

function Search ({mySearch}){

    return <input placeholder="Search" onChange={mySearch}></input>
}

export default Search