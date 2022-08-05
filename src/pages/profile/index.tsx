import { useState } from "react";
import { DisplayPfp } from "../../components/displayPfp";
import { DisplayUsername } from "../../components/displayUsername";
import { DisplayBio } from "../../components/displayBio";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { SettingsForm } from "../../components/settingsForm";
import { DisplayRepos } from "../../components/displayGitHubRepos";
import { DisplayGitHubActivity } from "../../components/displayGitHubActivity";
import { DisplayGitHubName } from "../../components/displayGitHubName";
import { EditBtn, ProfileDetails, NameHeader } from "./index.styles";

export const Profile = () => {
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Nav />
      <StyledContainer>
        <ProfileDetails>
          <NameHeader>
            <DisplayUsername />
            <DisplayUsername />
          </NameHeader>

          <DisplayPfp />
          <EditBtn onClick={handleChange}>Edit Profile</EditBtn>

          <DisplayGitHubName />
          <DisplayBio />
        </ProfileDetails>
        {showForm && <SettingsForm close={handleChange} />}

        <DisplayRepos />
        <DisplayGitHubActivity />
      </StyledContainer>
    </>
  );
};
