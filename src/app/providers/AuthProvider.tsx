'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const isLoginPage = pathname === '/login';
        console.log('AuthProvider check:', { token, pathname });
        if (!token && !isLoginPage) {
            router.replace('/login?reason=session_expired');
        }
    }, [pathname, router]);

    return children;
}