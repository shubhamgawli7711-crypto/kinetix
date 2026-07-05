type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({
  size = 42,
  className = "",
}: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Kinetix Logo"
      width={size}
      draggable={false}
      className={className}
    />
  );
}