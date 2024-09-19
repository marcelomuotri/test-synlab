import React, { useState } from "react";
import { Box, Fade, Grid2, Pagination, Typography } from "@mui/material";
import { useCharactersService } from "../../services/charactersService";
import "./home.scss";
import CharacterCard from "./CharacterCard/CharacterCard";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const { characters, totalResults, isLoading, error } = useCharactersService();
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const paginatedCharacters = characters.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) return <Loader />;
  if (error) return <Typography data-testid="error">{error}</Typography>;

  return (
    <Fade in={true} timeout={700}>
      <Box className="home">
        <Grid2 container spacing={2}>
          {paginatedCharacters.map((character) => {
            return (
              <Grid2
                size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
                className="home__grid"
              >
                <CharacterCard
                  key={character.id}
                  title={character.title}
                  fullName={character.fullName}
                  family={character.family}
                  imageUrl={character.imageUrl}
                />
              </Grid2>
            );
          })}
        </Grid2>
        <Pagination
          count={Math.ceil(totalResults / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{ display: "flex", justifyContent: "center" }}
          className="home__pagination"
        />
      </Box>
    </Fade>
  );
};

export default Home;
