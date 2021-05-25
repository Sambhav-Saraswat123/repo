import React from 'react'
import {Link} from 'react-router-dom'

const Channel = () => {
    return (
      <div>
        <Link to="https://www.youtube.com/channel/UCu09TOEaiAZqs4_eOOOUgHA">
          <button
            id="GotoYTVID"
            className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded"
          >
            Go to YouTube Channel
          </button>
        </Link>
      </div>
    );
}

export default Channel
