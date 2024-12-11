import React from "react";
import { useParams } from "react-router-dom";
import CoplayerPage from "../Components/Cooplayer";

const ActorPage = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Actor {name}</h1>
      <CoplayerPage actorName={name} />
    </div>
  );
};

export default ActorPage;
