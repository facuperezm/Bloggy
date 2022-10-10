import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="md:max-w-2xl md:mx-auto mx-12 font-spacemono ">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
