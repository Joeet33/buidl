import { useMoralis } from "react-moralis";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";

export const MarketPlaceEmployee = () => {
  const { Moralis, logout, isInitialized } = useMoralis();

  const user = isInitialized && Moralis.User.current();
  return (
    <>
      <Nav />
      <StyledContainer>
        <div>employee</div>
        <div>{user && user?.attributes?.username}</div>

        <button type="button" onClick={logout}>
          logout
        </button>
      </StyledContainer>
    </>
  );
};
