import useGetCountryFlag from "../../hooks/useGetCountryFlag";
import styles from "../Skeletons/Skeletons.module.css";

type FlagImageProps = {
  countryName: string;
  className?: string;
};

export default function FlagImage({ countryName, className }: FlagImageProps) {
  const { data: flagUrl, isLoading } = useGetCountryFlag(countryName);

  if (!countryName || isLoading) {
    return <div className={`${className} ${styles.skeletons}`} />;
  }

  if (!flagUrl) return "국기정보 없음";

  return <img className={className} src={flagUrl} alt={countryName} />;
}
