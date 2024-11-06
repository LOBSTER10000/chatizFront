import React from 'react';
import RankingType from '../types/RankingType.tsx';

interface GraphProps {
    others : RankingType[];
}

const RankingGraph : React.FC<GraphProps> = ({others})=>{
    
    return (
        <>
        <div className='wa_ranking__box'>
            <table className='wa_ranking__table'>
                <tbody>
                {others.map((item)=>(
                    item.number > 3 ?
                    <tr key={item.number} className='wa_ranking_tr'>
                        <td>{item.number}</td>
                        <td id="othersImgTR"><img src={item.icon} alt="dd" id='othersImg'/></td>
                        <td>{item.username}</td>
                        <td>{item.point}</td>
                    </tr>

                    : null
                ))}
                </tbody>
            </table>
        </div>
        <div>
            <input type="text" />
            <button type='submit'>검색</button>
        </div>
        </>
    )
}

export default RankingGraph;