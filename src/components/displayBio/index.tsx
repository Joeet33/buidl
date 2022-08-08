import { useMoralis } from "react-moralis";

export const DisplayBio = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <div>{user && user?.attributes?.bio}</div>;
};
