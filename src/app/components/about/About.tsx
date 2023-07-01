export default function About() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center p-9 m-9">
          <img src="./Nosotros.svg" alt="Nosotros" />
        </div>

        <div className="flex justify-between">
          <div style={{ backgroundColor: "" }} className="p-9 w-1/2 m-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              nobis enim quasi maiores eaque quis illum commodi eius, quas
              beatae.
            </p>
          </div>

          <div style={{ backgroundColor: "" }} className="p-9 w-1/2 m-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              consectetur reiciendis obcaecati odio laudantium accusantium
              culpa. Dolores id, corrupti, ut impedit aliquam, autem ex officia
              vero provident fugit quasi inventore.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "yellow", width: "100vw", height: "20vh" }}
      ></div>
    </>
  );
}
