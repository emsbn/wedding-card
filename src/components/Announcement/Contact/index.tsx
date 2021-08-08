import { ProfileContainer, ProfileImg, ProfileName } from './style';

const Contact = ({ img, name, mx = 0 }: { img: string; name: string; mx?: number }) => {
  return (
    <ProfileContainer mx={mx}>
      <ProfileImg src={img} alt={name} />
      <ProfileName>{name}</ProfileName>
    </ProfileContainer>
  );
};

export default Contact;
