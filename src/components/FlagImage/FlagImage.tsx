// components/FlagImage.tsx
import { Suspense } from "react";
import useGetCountryFlag from "../../hooks/useGetCountryFlag";
import styles from "../Skeletons/Skeletons.module.css";

type FlagImageProps = {
  countryName: string;
  className?: string;
};

function CountryFlagDisplay({ countryName, className }: FlagImageProps) {
  const { data: countryFlagUrl } = useGetCountryFlag(countryName);
  return (
    <img
      className={className}
      src={countryFlagUrl ?? undefined}
      alt={`${countryName} flag`}
    />
  );
}

export default function FlagImage({ countryName, className }: FlagImageProps) {
  if (!countryName) return null;

  return (
    <Suspense fallback={<div className={`${className} ${styles.skeletons}`} />}>
      <CountryFlagDisplay countryName={countryName} className={className} />
    </Suspense>
  );
}
