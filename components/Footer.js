import TwitterButton from "./TwitterButton";

export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col text-base md:text-xl items-center h-32 sm:h-12">
      <p>Copyright &copy; Mohit.World 2023</p>
      <TwitterButton/>
    </footer>
  );
}
