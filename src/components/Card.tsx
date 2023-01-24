export function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <img
        src="https://source.unsplash.com/random"
        alt="random image"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by Joe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>7000
          </li>
          <li>
            <strong>Downloads: </strong>100
          </li>
          <li>
            <strong>Likes: </strong>600
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}
