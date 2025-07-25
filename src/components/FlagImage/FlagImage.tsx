// components/FlagImage.tsx
import { Suspense } from "react";
import useGetCountryFlag from "../../pages/Home/hooks/useGetCountryFlag";
import styles from "./FlagImage.module.css";

function CountryFlagDisplay({ countryName }: { countryName: string }) {
  const { data: countryFlagUrl } = useGetCountryFlag(countryName);
  return (
    <img
      className={styles["flag-image"]}
      src={countryFlagUrl ?? undefined}
      alt={`${countryName} flag`}
    />
  );
}

export default function FlagImage({ countryName }: { countryName: string }) {
  if (!countryName) return null;

  return (
    <Suspense fallback={<div>국기 로딩 중...</div>}>
      <CountryFlagDisplay countryName={countryName} />
    </Suspense>
  );
}
