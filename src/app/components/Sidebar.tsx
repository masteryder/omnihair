'use client';

import {cn} from "../utils/cn";
import {
    faBook,
    faBox,
    faCashRegister,
    faScissors,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "./Button";
import useTranslation from "next-translate/useTranslation";
import {usePathname} from "next/navigation";

export const Sidebar = ({isCollapsed}) => {
    const {t} = useTranslation('common')
    const pathname = usePathname();

    return <div
        className={cn('bg-neutral min-h-screen h-full pt-2 pl-2 pb-2', isCollapsed ? 'w-28' : 'w-56')}>
        <div className={'text-base-100 text-center text-lg font-bold'}>OMNI
            hair
        </div>
        <ul className={'flex flex-col gap-1'}>
            {/* Sidebar content here */}
            <li>
                <Button
                    className={cn('group/menu-item justify-start text-start', pathname === '/register' && 'bg-primary border-primary hover:bg-primary-focus hover:border-primary-focus')}
                    iconClassName={cn('group-hover/menu-item:text-primary transition-all', pathname === '/register' && 'group-hover/menu-item:text-default')}
                    sizeModifier={'block'}
                    href="/register"
                    icon={faCashRegister}>
                    {t("Cash register")}
                </Button>
            </li>
            <li>
                <Button
                    className={cn('group/menu-item justify-start text-start', pathname === '/clients' && 'bg-primary border-primary hover:bg-primary-focus hover:border-primary-focus')}
                    iconClassName={cn('group-hover/menu-item:text-primary transition-all', pathname === '/clients' && 'group-hover/menu-item:text-default')}
                    sizeModifier={'block'}
                    href="/clients"
                    icon={faUsers}>
                    {t("Clients")}
                </Button>
            </li>
            <li>
                <Button
                    className={cn('group/menu-item justify-start text-start', pathname === '/reports' && 'bg-primary border-primary hover:bg-primary-focus hover:border-primary-focus')}
                    iconClassName={cn('group-hover/menu-item:text-primary transition-all', pathname === '/reports' && 'group-hover/menu-item:text-default')}
                    sizeModifier={'block'}
                    href="/reports"
                    icon={faBook}>
                    {t("Reports")}
                </Button>
            </li>
            <li>
                <Button
                    className={cn('group/menu-item justify-start text-start', pathname === '/services' && 'bg-primary border-primary hover:bg-primary-focus hover:border-primary-focus')}
                    iconClassName={cn('group-hover/menu-item:text-primary transition-all', pathname === '/services' && 'group-hover/menu-item:text-default')}
                    sizeModifier={'block'}
                    href="/services"
                    icon={faScissors}>
                    {t("Services")}
                </Button>
            </li>
            <li>
                <Button
                    className={cn('group/menu-item justify-start text-start', pathname === '/stock' && 'bg-primary border-primary hover:bg-primary-focus hover:border-primary-focus')}
                    iconClassName={cn('group-hover/menu-item:text-primary transition-all', pathname === '/stock' && 'group-hover/menu-item:text-default')}
                    sizeModifier={'block'}
                    href="/stock"
                    icon={faBox}>
                    {t("Stock")}
                </Button>
            </li>
        </ul>
    </div>
}