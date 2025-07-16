import React from "react";
import useFetch from "./useFetch";
import getRandomColor from "./RandomColor";

function DataDisplay(){
    const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/photos')
    if (loading) return <p className="text-white text-3xl flex items-center justify-center mt-80">Loading....</p>
    if (error) return <p className="text-white text-3xl flex items-center justify-center mt-80">Error: {error}</p>
    return (
        <div>
          <h1 className="text-white flex justify-center m-7 text-3xl">Photos</h1>
          {/* <pre className="text-white">{JSON.stringify(data, null, 2)}</pre> */}
          {/* <p className="text-red">{data.title}</p> */}
          <ul className="flex flex-wrap justify-center w-full">
            {
              data.map((items)=>(
                <li  >
                  <div className="border-2 border-white w-70 h-70 m-1 p-4 flex justify-center flex-wrap">
                    <div 
                     className="text-black-600 w-40 h-40 flex justify-center items-center m-2"
                     style={{backgroundColor: getRandomColor()}}
                     >
                      600*600
                    </div>
                    <p className="text-white flex justify-between flex-wrap ">
                    {items.title}
                    </p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      );
};
export default DataDisplay;