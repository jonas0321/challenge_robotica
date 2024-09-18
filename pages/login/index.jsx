import React from "react";
//Import plugin functions
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//Import redux
import { useAppDispatch } from "@/redux/hooks";
//Import components antd
import { App, Flex, Form, Input, Button, Image } from "antd";
//Import constants
import { INTERNAL_API_ROUTES, APP_ROUTES } from "@/utils/constants";
//Import own components
import ButtonAuth from "@/components/Shared/ButtonAuth/ButtonAuth";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(false);
  const { notification } = App.useApp();

  // useEffect(() => {
  //   //validate if isset company variable in the url, if not disabled the form and show notification
  //   if (!router.query.company && router.isReady) {
  //     setDisabled(true);
  //     notification.error({
  //       message: "Error",
  //       description:
  //         "Lo sentimos el link de ingreso no es valido, verifique el panel administrativo y confirme el link para ingresar a este panel.",
  //     });
  //   }
  // }, [router]);

  const onFinish = async (values) => {
    const { email, password } = values;

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      notification.error({
        message: "Error",
        description: responseNextAuth.error.split(",") || "Error al ingresar",
      });
      return;
    }

    router.push("/");
  };

  return (
    <Flex
      gap="middle"
      vertical
      align="center"
      justify="center"
      className="h-vh-100"
    >
      <Flex className="w-px-300" align="center" vertical>
        <Image
          width={200}
          src="/images/logo.png"
          preview={false}
          className="mb-2"
        />
      </Flex>
      <Flex className="w-px-300">
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          className="w-pr-100"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor ingresa un correo valido",
              },
            ]}
          >
            <Input
              placeholder="Email"
              size="large"
              disabled={disabled}
              defaultValue="jjoas@edu.co"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu clave",
              },
            ]}
          >
            <Input.Password
              placeholder="Contraseña"
              size="large"
              disabled={disabled}
              defaultValue="123456"
            />
          </Form.Item>

          <Form.Item>
            <ButtonAuth disabled={disabled} />
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}
