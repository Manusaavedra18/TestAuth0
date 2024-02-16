// pages/index.js
'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';


export default function Header() {
  const { user, error, isLoading } = useUser();

  return (
    <header>
        <div>
            <div>
                <Link href= "/" className='w-20 rounded border border-gray-400 px-3 py-0.5 transition-colors hover:border-white hover:bg-gray-600'>
                    Home
                </Link>
            </div>
            {error ? <div>{error.message}</div> : null}
            {!user ? 
            <div>
                <a href="/api/auth/login">
                    <button className='w-20 rounded border border-gray-400 px-3 py-0.5 transition-colors hover:border-white hover:bg-gray-600'>
                        <p className="text-xs">Entrar / Registrarse</p>
                    </button>
                </a>
            </div> 
            : null}
            {user ? 
            <div>
                <a href="/api/auth/logout">
                    <button className='w-20 rounded border border-gray-400 px-3 py-0.5 transition-colors hover:border-white hover:bg-gray-600'>
                        <p className="text-xs">Logout</p>
                    </button>
                </a>
            </div> 
            : null}
            
        </div>
    </header>
  )
}