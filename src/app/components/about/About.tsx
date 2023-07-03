export default function About() {
    return (
      <div className="flex flex-col justify-center">
        <div className="bg-white p-6 w-full flex flex-col items-center relative">
          <div className="flex flex-col md:flex-row md:items-center p-9">
            <img src="./Nosotros.svg" alt="Nosotros" />
          </div>
          <div className="flex flex-col md:flex-row text-black mb-20">
            <div className="p-9 w-full md:w-1/2">
              <p className="text-justify">
                Somos una empresa dedicada exclusivamente a la venta de pollo frito, somos portadores de felicidad, perseverancia y éxito. Nuestro propósito es transmitirte las mismas experiencias sumando a seguridad, confianza y ante todo libertad para cumplir las metas que vos te propongas.
              </p>
            </div>
            <div className="p-9 w-full md:w-1/2">
              <p className="text-justify">
                Nos enfocamos en que cada persona obtenga una experiencia distinta, todas positivas. Somos el cambio, somos creyentes de que todas las personas merecen una oportunidad. Si nosotros pudimos, vos también!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFF01] h-20 w-full  flex justify-center items-center relative">
            <img src="./pollocenter.png" alt="" className="absolute bottom-0" width={230}/>
        </div>
      </div>
    );
  }
  