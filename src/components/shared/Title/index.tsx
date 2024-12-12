import { FC } from "react";

interface ITitle {
  title: string;
  text: string;
}

const Title: FC<ITitle> = ({ title, text }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Title;
