import React from 'react';

export default function Profile() {
    return (
        <div>
            <h1>Profil Düzenle</h1>
            <form>
                <label htmlFor="name">İsim</label>
                <input id="name" type="text" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                <label htmlFor="password">Şifre</label>
                <input id="password" type="password" />
                <button className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"} type="submit">Profil Düzenle</button>
            </form>
        </div>
    );
}