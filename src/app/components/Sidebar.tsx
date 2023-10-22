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

export const Sidebar = ({isCollapsed}) => {
    const {t} = useTranslation('common')

    return <div
        className={cn('bg-neutral min-h-screen h-full pt-2 pl-2 pb-2', isCollapsed ? 'w-28' : 'w-56')}>
        <div className={'text-base-100 text-center text-lg font-bold'}>OMNI
            hair
        </div>
        <ul className={'flex flex-col gap-1'}>
            {/* Sidebar content here */}
            <li>
                <Button className={'group/menu-item justify-start text-start'}
                        iconClassName={'group-hover/menu-item:text-primary transition-all'}
                        sizeModifier={'block'}
                        href="/register"
                        icon={faCashRegister}>
                    {t("Cash register")}
                </Button>
            </li>
            <li>
                <Button className={'group/menu-item justify-start text-start'}
                        iconClassName={'group-hover/menu-item:text-primary transition-all'}
                        sizeModifier={'block'}
                        href="/clients"
                        icon={faUsers}>
                    {t("Clients")}
                </Button>
            </li>
            <li>
                <Button className={'group/menu-item justify-start text-start'}
                        iconClassName={'group-hover/menu-item:text-primary transition-all'}
                        sizeModifier={'block'}
                        href="/reports"
                        icon={faBook}>
                    {t("Reports")}
                </Button>
            </li>
            <li>
                <Button className={'group/menu-item justify-start text-start'}
                        iconClassName={'group-hover/menu-item:text-primary transition-all'}
                        sizeModifier={'block'}
                        href="/services"
                        icon={faScissors}>
                    {t("Services")}
                </Button>
            </li>
            <li>
                <Button className={'group/menu-item justify-start text-start'}
                        iconClassName={'group-hover/menu-item:text-primary transition-all'}
                        sizeModifier={'block'}
                        href="/stock"
                        icon={faBox}>
                    {t("Stock")}
                </Button>
            </li>
        </ul>
    </div>
}