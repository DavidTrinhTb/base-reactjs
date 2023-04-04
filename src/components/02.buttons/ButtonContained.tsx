import { Button, ButtonProps } from "antd";
import React from "react";
import "./styles/button-contained.scss";

interface IButtonContainedProps extends ButtonProps {}

const ButtonContained: React.FC<IButtonContainedProps> = (
  props: IButtonContainedProps
) => {
  const { children, className } = props;
  return (
    <Button className={className ? className : "contained-default"} {...props}>
      {children}
    </Button>
  );
};

export default ButtonContained;
