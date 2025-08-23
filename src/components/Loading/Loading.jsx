import './Loading.css'
import { useLoading } from '../../context/LoadingContext'

export default function Loading() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner" />
    </div>
  );
}
