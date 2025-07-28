import styles from "./Skeletons.module.css";

export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  margin?: number | string;
  className?: string;
};

export default function Skeletons({
  className = "",
  width = 0,
  height = 0,
  borderRadius = 0,
  margin = 0,
}: SkeletonProps) {
  return (
    <div
      className={`${styles.skeletons} ${className}`}
      style={{ width, height, borderRadius, margin }}
    />
  );
}
