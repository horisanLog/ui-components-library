// const styles: {[key: string]: React.CSSProperties} = {
//   button: {
//     borderRadius: "var(--radius)",
//     borderWidth: "0",
//     display: "inlineBlock",
//     fontWeight: "var(--font-weight-bold)",
//     fontSize: "var(--font-size-m)",
//     lineHeight: "1",
//     padding: ".8rem",
//     textDecoration: "none",
//     transition: "opacity var(--hover-animation)",
//     // "&:hover": {
//     //   opacity: ".7"
//     // },
//   },
//   default: {
//     backgroundColor: "inherit",
//     border: "var(--border)",
//     color: "var(--color-info)"
//   },
//   primary: {
//     backgroundColor: "var(--color-primary)",
//     color: "var(--color-text-outlined)"
//   },
//   warning: {
//     backgroundColor: "var(--color-warning)",
//     color: "var(--color-text-outlined)"
//   }
// };

// export default styles;
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
  const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });

export default Button
