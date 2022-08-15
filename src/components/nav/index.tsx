import { useMoralis } from "react-moralis";
import { NavLink } from "react-router-dom";

import { Profile } from "../../pages/profile";
import { ROUTER_PATHS } from "../../routerPaths";
import { StyledButton } from "./index.muistyles";
import { FlexBox1, FlexBox2, NavContainer } from "./index.style";

export const Nav = () => {
  const { logout } = useMoralis();
  return (
    <NavContainer>
      <FlexBox1>
        <NavLink to={ROUTER_PATHS.EMPLOYEE}>Buidl</NavLink>
      </FlexBox1>

      <FlexBox2>
        <ul>
          <li>
            <NavLink to={ROUTER_PATHS.EMPLOYER}>Apply</NavLink>
          </li>
          <li>
            <NavLink  to={ROUTER_PATHS.SIGNUP}>Browse</NavLink>
          </li>
          <li>
            <NavLink to={ROUTER_PATHS.PROFILE}>Profile</NavLink>
          </li>
        </ul>
        <StyledButton onClick={logout} variant="contained">
          Disconnect
        </StyledButton>
      </FlexBox2>
    </NavContainer>
  );
};
