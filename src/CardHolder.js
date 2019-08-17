import React from 'react';

const CardHolder = ({id,baseImage,partNumber,article,updateData,hasImage})=>{

        return(
            <div className="card m-1 p-1" style={{width: "260px"}}>
                { hasImage &&
                <div>
                    <img src={baseImage} className="card-img-top" style={{width: "250px"}} alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">Код производителя: {partNumber}</h6>
                        <p className="card-text">{article}</p>
                    </div>
                </div>
                }
                     <button className="btn btn-primary" onClick= {updateData.bind(null,id)} >Hide content</button>
                    <button className="btn btn-primary">Delete</button>

            </div>
        )

}
export default CardHolder