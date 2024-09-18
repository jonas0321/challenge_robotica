//Import plugins functions
import { signOut, useSession } from "next-auth/react";
//Import components antd
import { Button } from "antd";
//Import constants
import { APP_ROUTES } from "@/utils/constants";

export default function ButtonAuth({ disabled }) {
  const { data, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleClickAuthButton = () => {
    if (data) {
      signOut({ callbackUrl: APP_ROUTES.LOGIN });
    }
  };

  return (
    <>
      <Button
        type="primary"
        htmlType="submit"
        className="w-pr-100 mt-2 w-100 antInputHeight"
        disabled={disabled}
        onClick={() => handleClickAuthButton()}
      >
        {data ? "Cerrar" : "Iniciar"} sesión
      </Button>
    </>
  );
}
