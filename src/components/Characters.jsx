import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((character, index) => (
        <div className="col mb-4" key={index}>
          <div className="card" style={{ width: "250px" }}>
            <img src={character.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <hr />
              <p>
                Species: {character.species} <br />
                Status: {character.status} <br />
                Location: {character.location.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
