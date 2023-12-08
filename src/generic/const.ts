const routes = <const T>(routes: T[]) => {
  const addRedirect = (from: T, to: T) => {
    // Do something
    console.log(from, to);
  };

  return {
    addRedirect,
  };
};
const router = routes(["/", "/about", "/about/:id"]);

router.addRedirect("/", "/about");
