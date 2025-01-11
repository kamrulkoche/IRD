// src/app/(protected)/layout.tsx
"use client"
import Settings from '@/components/Settings/Settings';
import '../../styles/globals.css';
import Menu from '@/components/Menu/Menu';
import Header from '@/components/Header/Header';
import Categories from '@/components/Categories/Categories';
import Middle from '@/components/Middle/Middle';
import Cart from '@/components/CommonComponents/Cart/Cart';


export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div className="font-poppins">
            <div className="mx-auto px-2 sm:px-4 lg:px-12 min-h-[100vh] bg-first-300 pt-6">
                <div className='flex'>
                    <div className='flex gap-6'>
                        <Menu />
                        <Categories />
                    </div>
                    <div className='flex-1 grid mx-8 h-full'>
                        <Header />
                        <Middle />
                        <Cart/>
                        <Cart/>
                        <Cart/>

                    </div>
                    <div><Settings /></div>
                </div>
            </div>

        </div>

    );
}
