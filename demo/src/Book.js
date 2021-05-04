import React from 'react';

const Book =(props)=>{
    const { Img,Author,Name} = props;  
    return <article className="book">
    <img src = {Img} alt=" " />
    <h1>{Author}</h1>
    <h5>{Name}</h5>

    </article>;
}
export default Book