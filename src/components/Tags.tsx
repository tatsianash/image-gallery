interface IProps {
  tags: string;
}
export function Tags({ tags }: IProps) {
  const tagsArr = tags.split(', ');
  return (
    <div className="px-6 py-4">
      {tagsArr.map((tag: string, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
      ))}
    </div>
  );
}
