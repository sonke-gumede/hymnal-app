import GroupedCards from "@/components/Cards/grouped.cards";
import SongCard from "@/components/Cards/song.card";
import { useTheme } from "@rneui/themed";
import React from "react";

const Favourites: React.FunctionComponent<any> = () => {
  const { theme } = useTheme();
  const blue = [
    theme.colors.primary.pacificBlue,
    theme.colors.gradient.pacificBlue,
  ];
  const gold = [theme.colors.primary.gold, theme.colors.gradient.gold];
  const purple = [
    theme.colors.secondary.softPurple,
    theme.colors.gradient.softPurple,
  ];
  return (
    <GroupedCards title="Favourites">
      <SongCard gradient={gold} hideButtons />
      <SongCard gradient={blue} hideButtons />
      <SongCard gradient={purple} hideButtons />
    </GroupedCards>
  );
};

export default Favourites;
