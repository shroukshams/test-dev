"use client";

import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useAuthStore from "@/store/authStore";
import Link from "next/link";

type IAuthUser = {
    email: string
    password: string
    remember: boolean
}

const schema = yup
    .object({
        email: yup.string().required().lowercase().email().max(255),
        password: yup.string().required(),
        remember: yup.boolean().oneOf([true, false]).default(false),
    })
    .required()

export default function Page() {
    const [login] = useAuthStore((state) => [state.login]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAuthUser>({ resolver: yupResolver(schema) });

    const onSubmit = (data: IAuthUser) => {
        login(data).then((res: any) => {
          console.log(res);
        });
    };


    return (
        <div className="prose dark:prose-invert">
            <h1>Giriş Yap</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
                <label htmlFor="password">Şifre</label>
                <input id="password" type="password" {...register("password")}/>
                {errors.password && <p>{errors.password.message}</p>}
                <label htmlFor="remember">Beni hatırla</label>
                <input id="remember" type="checkbox" {...register("remember")} />
                <button className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"} type="submit">Giriş Yap</button>
                <Link href="/register" className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"}><button className="w-full">Kayıt ol</button></Link>
            </form>
        </div>
    );
}
