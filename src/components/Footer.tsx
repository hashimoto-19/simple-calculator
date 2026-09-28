type FooterProps = {
  className?: string;
};
const Footer = ({ className }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className={className}>
      <p>&copy; {year} 計算機アプリ</p>
    </footer>
  );
};
export default Footer;
