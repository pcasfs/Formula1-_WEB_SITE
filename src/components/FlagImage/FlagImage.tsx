import useGetCountryFlag from "../../pages/Home/hooks/useGetCountryFlag";
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

  if (!flagUrl) return null;

  return <img className={className} src={flagUrl} alt={countryName} />;
}
