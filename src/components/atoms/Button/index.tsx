import React from "react";
import Button from "./styles";

interface Props {
  name: string;
}

const DefalutButton: React.FC<Props> = ({ name, ...props }: Props) => {
  return <Button style={{ ...props }}>{name}</Button>;
};

export default DefalutButton;
