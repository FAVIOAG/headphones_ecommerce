import React from "react";
import auricular from "../../assets/auricular.png";
import "./card.css";

const Card = () => {
    return (
        <div className="card">
        <div className="product">
            <img className="imagen" src={auricular} alt="" />
            <div className="data">
                <p className="title">Auricular Xiaomi Buds 3 Lite</p>
                <p className="price">$8.999</p>
            </div>
            <p className="descripte">Bluetooth 5.2. Acciones tactiles sensibles.</p>
            <button className="add">Add to Cart</button>
        </div>
        <div className="product">
            <img className="imagen" src={auricular} alt="" />
            <div className="data">
                <p className="title">Auricular Xiaomi Buds 3 Lite</p>
                <p className="price">$8.999</p>
            </div>
            <p className="descripte">Bluetooth 5.2. Acciones tactiles sensibles.</p>
            <button className="add">Add to Cart</button>
        </div>
        <div className="product">
            <img className="imagen" src={auricular} alt="" />
            <div className="data">
                <p className="title">Auricular Xiaomi Buds 3 Lite</p>
                <p className="price">$8.999</p>
            </div>
            <p className="descripte">Bluetooth 5.2. Acciones tactiles sensibles.</p>
            <button className="add">Add to Cart</button>
        </div>
        <div className="product">
            <img className="imagen" src={auricular} alt="" />
            <div className="data">
                <p className="title">Auricular Xiaomi Buds 3 Lite</p>
                <p className="price">$8.999</p>
            </div>
            <p className="descripte">Bluetooth 5.2. Acciones tactiles sensibles.</p>
            <button className="add">Add to Cart</button>
        </div>
        </div>
    );
}

export {Card};
