import React from "react";

const Home = () => {
  const style = {
    color: "whitesmoke",
  };
  return (
    <div style={style}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src="https://i.ytimg.com/vi_webp/0IEX8eQ2Iso/maxresdefault.webp"
                alt="vid1"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Develop Web
            </h2>
            <p className="leading-relaxed text-base">New H.T.M.L. Series</p>
            <a href="https://www.youtube.com/watch?v=0IEX8eQ2Iso">
              <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">
                Watch on
                YouTube
              </button>
            </a>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src="https://i.ytimg.com/vi_webp/w3kwe9JGw9s/maxresdefault.webp"
                alt="vid2"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Google Drive Link
            </h2>
            <p className="leading-relaxed text-base">
              Get <b>Google Drive link</b> for <b>any kind</b> of file
            </p>
            <a href="https://www.youtube.com/watch?v=w3kwe9JGw9s">
              <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">
               Watch on
                YouTube
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
