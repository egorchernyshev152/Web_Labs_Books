import { title } from "process";

interface Props {
    title: string;
    price: number;
}

export const CardTitle = ({title, price} : Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="card__title">Название: {title}</p>
        <p className="card__price">Цена: {price} ₽</p>
    </div>
    )
}