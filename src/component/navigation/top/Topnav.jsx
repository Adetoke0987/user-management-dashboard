import avatar from ""
import './topbar.css'
export default ()=>{
    return(
        <>
            <div className="topbar"> 
                <h1>Welcome Adetoke</h1>
               <img src={avatar} alt="" width="80px" />
            </div>
        </>
    )
}