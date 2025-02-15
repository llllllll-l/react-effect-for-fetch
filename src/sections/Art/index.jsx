import { useEffect, useState } from "react";

import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/`;

  useEffect(() => {
    console.log("Running art useEffect");
    const fetchData = async () => {
      try {
        const req = await fetch(URL + "art");
        const res = await req.json();
        setArtData(res);
      } catch (er) {
        console.log("OBS! Something happened: ", er);
      }
    };
    fetchData();
  }, [URL]);

  //console.log(data);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {/* Componenet */}
        <ArtList artData={artData} URL={URL}></ArtList>
      </div>
    </section>
  );
}

export default ArtsSection;

/*
  <section>
  <h2>Arts Section</h2>
  <div class="scroll-container">
    <ul class="art-list">
      <li>
        <div class="frame">
          <img
            src="https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg"
          />
        </div>
        <h3>Paris Street; Rainy Day</h3>
        <p>Artist: Gustave Caillebotte</p>
        <h4>Publication History:</h4>
        <ul>
          <li>Catalogue de la 3e exposition de peinture, exh. cat. (E. Capiomont et V. Renault, 1877), p. 3, cat. 1.</li>
          <li>Léon Mancino, “La descente de la courtille,” L’art 9 (Apr. 1877), p. 70.</li>
          <li>Anonymous [possibly Gaston Vassy], “La journée à Paris: L’exposition des impressionnalistes,” L’événement, Apr. 6, 1877, p. 2.</li>
        </ul>
      </li>
    </ul>
  </div>
</section>
 */
