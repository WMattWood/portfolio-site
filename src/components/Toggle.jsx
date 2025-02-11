import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  ${(props) =>
    props.checked &&
    `
    background-color: #2196F3;

    &::before {
      transform: translateX(26px);
    }
  `}

  ${SwitchInput}:focus + & {
    box-shadow: 0 0 1px #2196F3;
  }

  &.round {
    border-radius: 34px;
  }

  &.round::before {
    border-radius: 50%;
  }
`;

const Toggle = ({ checked, onChange }) => {
//   const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <SwitchLabel>
      <SwitchInput
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <Slider className="round" checked={checked}></Slider>
    </SwitchLabel>
  );
};

export default Toggle;
