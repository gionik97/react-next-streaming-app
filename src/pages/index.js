import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "components/HBOProvider";
import Login from "components/ui/Login/Login";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      router.push("/create");
    }
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
