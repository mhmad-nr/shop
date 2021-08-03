import React from 'react'
import{ iconsData as data} from "./iconData";

const Icons = () => {
    return (
        <>
            <div className="container-fluid icons-container">
                <div className="row">
                    {
                        data.map((item) => {
                            return (
                                <div className="col-3 text-center">
                                    <img className="w-50" alt="img" src={item.img} />
                                    <h3 className="title">{item.title}</h3>
                                    <p className="d-none d-md-block">{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Icons;