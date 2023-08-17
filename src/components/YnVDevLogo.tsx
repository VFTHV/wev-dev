import '../styles/ynv-dev-logo.css';

interface YnVDevLogo {
  fontSize?: number;
}

export const YnVDevLogo = ({ fontSize }: YnVDevLogo) => {
  const size = fontSize || 34;
  return (
    <div style={{ fontSize: `${size}px` }} className="logo">
      <span className="ynv">YnV</span>
      <span className="dev">Dev</span>
    </div>
  );
};
