import React from "react"

type TProps = {
    info: {
        title: string;
        text: string;
        src?: string;
    }
    children?: React.ReactNode
}

export const Card = (props: TProps) => {
    const {title, text, src} = props.info    

    return (
    <div className="card" style={{width: "18rem"}}>
        {src? <img src = {src} className = "card-img-top" alt = "Какая - то картинка :)"></img> : props.children }
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
    )
}
