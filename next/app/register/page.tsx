"use client";

import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useAuthStore from "@/store/authStore";
import Link from "next/link";

type IRegisterUser = {
    name: string
    email: string
    password: string
}

const schema = yup
    .object({
        name: yup.string().required().max(255),
        email: yup.string().required().lowercase().email().max(255),
        password: yup.string().required(),
    })
    .required()

export default function Page() {
    const _register = useAuthStore((state) => state.register);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterUser>({ resolver: yupResolver(schema) });

    const onSubmit = (data: IRegisterUser) => {
        _register(data).then((res: any) => {
          console.log(res);
        });
    };


    return (
        <div className="prose dark:prose-invert">
            <h1>Giriş Yap</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <label htmlFor="name">Ad Soyad</label>
                <input id="name" type="name" {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
                <label htmlFor="email">Email</label>
                <input id="email" type="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
                <label htmlFor="password">Şifre</label>
                <input id="password" type="password" {...register("password")}/>
                {errors.password && <p>{errors.password.message}</p>}
                <button className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"} type="submit">Kayıt Ol</button>
                <Link href="/login" className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"}><button className="w-full">Giriş Yap</button></Link>
            </form>
        </div>
    );
}
