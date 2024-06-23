import CollectionsCard from "@/components/Cards/collections.card";
import GroupedCards from "@/components/Cards/grouped.cards";
import SongCard from "@/components/Cards/song.card";
import { useTheme } from "@rneui/themed";
import React from "react";

const Collections: React.FunctionComponent<any> = () => {
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
    <GroupedCards title="Collection">
      <CollectionsCard
        title="Songs about weddings"
        image="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
      />
      <CollectionsCard
        title="Songs about Funeral"
        image="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
      />
      <CollectionsCard
        title="Uplifting songs"
        image="https://fastly.picsum.photos/id/130/3807/2538.jpg?hmac=Kl_ZLgNPUBhsKnffomgQvxWA17JhdNLYBnwlPHBEias"
      />
      <CollectionsCard
        title="New path"
        image="https://fastly.picsum.photos/id/255/4592/3064.jpg?hmac=BcnD3DxSOwVVMoVuPFZJPBh2ZA8qr0V0P_Dg9BGVGyk"
      />
    </GroupedCards>
  );
};

export default Collections;
