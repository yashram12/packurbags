import React from 'react'

const Star = (props) => {

    let a;
    const stars =(n)=>{
        a=[];
        if(n>=0){
            for(let i=0;i<5;i++){
                if(i<n)
                    a.push(<li key={i} style={{color:"gold"}}><i className="fa fa-star"></i></li>)
                else
                    a.push(<li key={i} style={{color:"gainsboro"}}><i className="fa fa-star"></i></li>)
            }
        }
         return a
    }
    
    return (
            <ul style={{listStyleType:"none",display:"flex",flexDirection:'row',justifyContent:"flex-start",width:'100%'}}>
            {stars(props.n)}
        </ul>
    )
}

export default Star
