import { Link } from "react-router-dom";
import { Input } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const Primary_Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("email")} type="text" placeholder="E-mail" />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <Input {...register("password")} type="password" placeholder="Password" />
      <Link  to="../ForgotP">
        Esqueceu a senha?
      </Link>
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Entrar"}
      </button>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
      <div>
        Não tem cadastro?{" "}
        <Link  to="../Sign_Up">
          Inscreva-se
        </Link>
      </div>
    </form>
  );
};

export default Primary_Login;
