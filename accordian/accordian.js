import {useState} from "react" ;
import "./accordian.css" ;
import data from "./data.js" ;

function Accordian(){

    const [selectId,setSelectId] = useState(null) ;
    const [arrId,setArrId] = useState([]);
    const [multi,setMilti] = useState(false) ;

    const handleSelect = (id) => {
        if(!multi){
            setSelectId((prev) => prev != id ? id : null )
        }else{
            setArrId((prev) => prev.includes(id) ?  prev.filter((ele) => ele != id ) : [...prev,id]  )
        }
    }

    const handleMulti = (e) => {
        e.target.classList.toggle("gold");
        setMilti((prev) => !prev) ;
    }

    return(
        <div className="container">
            <div onClick={handleMulti} className="head">
                <h3>Enable Multi Selection</h3>
            </div>
            {
                data.map((ele) => {
                    return(
                        <div onClick={() => handleSelect(ele.id)} className="Item">
                            <div className="itemEle">
                                <h4>{ele.question}</h4>
                                <p>+</p>
                            </div>
                            <div className="Details">
                                {
                                    ele.id == selectId || arrId.includes(ele.id) ?<p>{ele.answer}</p>:null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordian ;