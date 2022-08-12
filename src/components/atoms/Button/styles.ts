import styled from "styled-components";

const Button = styled.button`
  border-radius: var(--radius);
  border-width: 0;
  display: inlineBlock;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-m);
  line-height: 1;
  padding: .8rem;
  text-decoration: none;
  transition: opacity var(--hover-animation);
  &:hover {
    opacity: .7;
  }
`;

export const PrimaryButton = styled(Button)`
  color: red;
  `

export default Button
