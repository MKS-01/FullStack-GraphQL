import React, { useState } from "react";
import NetworkConnection from "_utils/NetworkConnection";
import Error from "_components/common/Error";
import { Container } from "_styles/RootView";
import Title from "_components/common/Header";
import Search from "_components/common/Search";

const BookmarksScreen = () => {
  const [search, setSearch] = useState("");

  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <Container>
      <Title title={"Bookmark"} type="title" />
      <Search
        placeholder={"Browse News"}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </Container>
  );
};

export default BookmarksScreen;
