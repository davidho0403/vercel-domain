interface VercelLogoProps {
  className?: string;
}

const VercelLogo = ({ className }: VercelLogoProps) => {
  return (
    <svg
      viewBox="0 0 256 222"
      width="256"
      height="222"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <path fill="#000" d="m128 0 128 221.705H0z" />
    </svg>
  );
};

export default VercelLogo;