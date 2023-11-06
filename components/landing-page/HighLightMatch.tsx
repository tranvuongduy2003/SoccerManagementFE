const HighLightMatch = () => {
  return (
    <section className="mx-5" id="match">
      <div className=" container mx-auto mb-28">
        <div className="text-white flex-1 flex flex-col my-16">
          <h2 className="text-5xl font-bold my-8 text-center">
            Top Matches Highlights
          </h2>
          <p className="text-center">
            They are very soft and do not leave any painful feeling. 
            <br />
            He likes to take care of his family. Practice will get results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* <!-- card-1 --> */}
          <div className="card bg-base-100 shadow-xl">
            <div className="p-5">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/COHjJEENyPQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-5 mb-6">
              <h2 className="text-3xl font-bold mb-5">Portugal Vs Morocco </h2>
              <p>
              Morocco 1-0 Portugal - World Cup 2022 - Ronaldo 
              Last Match At The World Cup - [EC] - FHD
              </p>
            </div>
          </div>

          {/* <!-- card-2 --> */}
          <div className="card bg-base-100 shadow-xl">
            <div className="p-5">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/pBBeGTS3hFs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-5 mb-6">
              <h2 className="text-3xl font-bold mb-5">Argentina Vs Saudi Arabia</h2>
              <p>
              Argentina vs Saudi Arabia 1-2 ● World Cup 2022 | Extended Highlights & Goals
              </p>
            </div>
          </div>

          {/* <!-- card-3 --> */}
          <div className="card bg-base-100 shadow-xl">
            <div className="p-5">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/tpPmn2ZuOV8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-5 mb-6">
              <h2 className="text-3xl font-bold mb-5">Argentina Vs French</h2>
              <p>
                ARGENTINA 3-3 (4-2) FRANCE 🏆 All Goals & EXTENDED Highlights🎙️Final World Cup 2022
              </p>
            </div>
          </div>

          {/* <!-- card-4 --> */}
          <div className="card bg-base-100 shadow-xl">
            <div className="p-5">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/afexUzceR2g"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-5 mb-6">
              <h2 className="text-3xl font-bold mb-5">Portugal Vs Uruguay</h2>
              <p>
                Cristiano Ronaldo vs Uruguay | 28/11/22 | Portugal vs Uruguay | World Cup Qatar 2022
              </p>
            </div>
          </div>

          {/* <!-- card-5 --> */}
          <div className="card bg-base-100 shadow-xl">
            <div className="p-5">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/FKmoEBAPWME"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-5 mb-6">
              <h2 className="text-3xl font-bold mb-5">Brazil Vs Croatia</h2>
              <p>
              Croatia vs Brazil | 1-1 | [4-2] Highlights & All Goals 🏆 Quarter Final World Cup 2022 HD
              </p>
            </div>
          </div>

          {/* <!-- card-6 --> */}
          <div className="card bg-base-100 shadow-xl">
            <div className="p-5">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/YS88dpbyzTA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-5 mb-6">
              <h2 className="text-3xl font-bold mb-5">England vs French</h2>
              <p>
              England 1-2 France - World Cup 2022 - Girouds Header Wins It - Extended Highlights - [EC] - FHD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighLightMatch;
