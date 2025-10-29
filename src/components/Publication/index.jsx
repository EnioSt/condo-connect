import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";

export const Publication = () => {
  const liked = true;
  return (
    <div className="flex flex-col gap-3 text-gray-800 dark:text-gray-400">
      <h3 className="text-xl font-semibold">
        Marieva Silva, <span className="text-blue-600 font-normal">907</span>
      </h3>
      <p className="mt-2 text-xl text-gray-600 dark:text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>

      <div className="flex gap-4">
        <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          <span>45</span>
        </button>

        <button
          className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Comentar publicação"
        >
          <MdOutlineComment size={20} />
          <span>3</span>
        </button>
      </div>
    </div>
  );
};
