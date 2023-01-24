import { Hit } from '../apiReturnTypes';
import { Tags } from './Tags';

interface IProps {
  image: Hit;
}
export function Card({ image }: IProps) {
  const { webformatURL, user, views, downloads, likes, tags } = image;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <img src={webformatURL} alt="random" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <Tags tags={tags} />
    </div>
  );
}
