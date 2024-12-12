import { FC } from "react";
import Image from "next/image";

interface IInfoBlock {
  title: string;
  text: string;
  img: string;
}

const InfoBlock: FC<IInfoBlock> = ({ title, text, img }) => {
  return (
    <div className="info-block">
      <div className="info-block__header">
        <h4>{title}</h4>
        <Image src={img} alt={title} width={75} height={75} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default InfoBlock;
