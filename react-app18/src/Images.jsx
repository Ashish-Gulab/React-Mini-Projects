import React from 'react';

const Images=(props)=>{

    const img=`https://source.unsplash.com/600x500?${props.imgName}`;
    return (<>
        <img src={img} alt="search image" />
    </>);
};

export default Images;