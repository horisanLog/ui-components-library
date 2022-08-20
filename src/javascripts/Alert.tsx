import * as React from 'react';

interface Props {
  message: string
}

const Alert: React.FC<Props> = ({ message }: Props) => {
  return (
    <div style={{ backgroundColor: 'green', color: '#fff', padding: '1em' }}>
      {message}
    </div>
  )
};

export default Alert;
