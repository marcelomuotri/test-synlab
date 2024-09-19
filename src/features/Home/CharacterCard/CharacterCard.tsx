import { Typography, Box } from "@mui/material";
import { Character } from "../../../services/charactersService";
import "./characterCard.scss";

type CharacterCardProps = Pick<
  Character,
  "title" | "fullName" | "imageUrl" | "family"
>;

const CharacterCard = ({
  title,
  fullName,
  family,
  imageUrl,
}: CharacterCardProps) => {
  return (
    <Box className="card" data-testid="character-card">
      <Box
        component="img"
        src={imageUrl}
        alt={fullName}
        className="card__image"
      ></Box>
      <Box className="card__content">
        <Typography>{title}</Typography>
        <Typography>{fullName}</Typography>
        <Typography className="card__family">{family}</Typography>
      </Box>
    </Box>
  );
};

export default CharacterCard;
