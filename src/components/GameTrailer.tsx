import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error || !data) throw error;

  const content = data?.results[0];
  // console.log(content);
  return content ? (
    <video src={content?.data[480]} poster={content?.preview} controls />
  ) : null;
}
