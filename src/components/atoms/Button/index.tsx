import React from "react";
import Button, { PrimaryButton } from "./styles";

interface Props {
  name: string;
  style?: React.CSSProperties;
}

const DefalutButton: React.FC<Props> = ({ name, style }: Props) => {
  return <Button style={{ ...style }}>{name}</Button>;
};

export const RedButton: React.FC<Props> = ({ name, style }: Props) => {
  return <PrimaryButton style={{ ...style }}>{name}</PrimaryButton>;
};

export default DefalutButton;
