import { useState, useEffect } from "react";

export interface Character {
  id: number;
  fullName: string;
  title: string;
  family: string;
  imageUrl: string;
}

export const useCharactersService = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const serializeData = (data: any[]): Character[] => {
    return data.map((item) => ({
      id: item.id,
      fullName: item.fullName,
      title: item.title,
      family: item.family,
      imageUrl: item.imageUrl,
    }));
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://thronesapi.com/api/v2/Characters`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const serializedData = serializeData(data);
        setCharacters(serializedData);
      } catch (error) {
        console.error("Failed to fetch Characters", error);
        setError("Failed to fetch Characters");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return {
    characters,
    totalResults: characters?.length,
    isLoading,
    error,
  };
};
