import TextArea, { TextAreaProps } from 'antd/lib/input/TextArea';
import classnames from 'classnames';
import React from 'react';
import './styles/textarea.scss';

export interface FracTextAreaProps extends TextAreaProps {
  className?: string;
  placeholder?: string;
  height?: number;
  resize?: any;
}

export const FracTextArea: React.FC<FracTextAreaProps> = (props: FracTextAreaProps) => {
  const { className, resize, height, placeholder } = props;
  return (
    <TextArea
      className={classnames('default-textarea', [className])}
      placeholder={placeholder}
      style={{ height: height, resize: resize }}
      {...props}
    />
  );
};
