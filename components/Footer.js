import TwitterButton from "./TwitterButton";

export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col items-center h-32 sm:h-12">
      <p>Copyright &copy; Mohitfun.fun 2023</p>
      <TwitterButton/>
    </footer>
  );
}
