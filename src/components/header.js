import { Component } from "../lib/react/index.js";
import style from "../lib/styled-component.js";
import { WrapperStyled } from "./wrapper.js";

const HeaderStyle = style.header`
  background: #0e3fa9;
  margin-bottom: 2em;
  text-align: center;
`;

const HeaderLogo = style.img`
  width: 200px;
  position: relative;
  top: 20px;
  filter: drop-shadow(3px 3px 0 #f2a30c);
`;

class Header extends Component {
  render() {
    return HeaderStyle({
      children: [
        WrapperStyled({
          children: HeaderLogo({src: "./images/logo.png"})
        })
      ]
    })
  }
}

{
  /* <header class="header">
  <div class="wrapper">
    <img src="./images/logo.png" alt="" />
  </div>
</header>; */
}

export default Header;
