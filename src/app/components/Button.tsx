import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import {PropsWithChildren, ReactNode} from "react";
import {cn} from "../utils/cn";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type ButtonProps = {
    color?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'danger' | 'warning';
    variant?: 'filled' | 'link' | 'ghost' | 'outlined';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    isWide?: boolean;
    sizeModifier?: 'wide' | 'block';
    appearanceModifier?: 'ghost' | 'glass';
    isDisabled?: boolean;
    isLoading?: boolean;
    shape?: 'square' | 'rounded' | 'rounded-full';
    icon?: IconDefinition;
    iconPlacement?: 'start' | 'end';
    onClick?: () => void;
    href?: string;
    className?: string;
    iconClassName?: string;
} & PropsWithChildren;

const classes = {
    color: {
        default: '',
        neutral: 'btn-neutral',
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        info: 'btn-info',
        success: 'btn-success',
        warning: 'btn-warning',
        error: 'btn-error',
    },
    variant: {
        filled: '',
        outlined: 'btn-outline',
        link: 'btn-link'
    },
    size: {
        md: '',
        xs: 'btn-xs',
        sm: 'btn-sm',
        lg: 'btn-lg'
    },
    shape: {
        rounded: '',
        'rounded-full': 'rounded-full',
    },
    appearanceModifier: {
        ghost: 'btn-ghost',
        glass: 'btn-glass',
    },
    sizeModifier: {
        wide: 'btn-wide',
        block: 'btn-block'
    },
    iconPlacement: {
        start: 'flex-row',
        end: 'flex-row-reverse',
    },
    noChildren: {
        size: {
            xs: 'w-[1.5rem]',
            sm: 'w-[2rem]',
            md: 'w-[3rem]',
            lg: 'w-[4rem]',
        }
    }
}
const iconClasses = {
    size: {
        xs: 'w-1.5 h-1.5',
        sm: 'w-2 h-2',
        md: 'w-3 h-3',
        lg: 'w-4 h-4',
    },
    iconPlacement: {
        start: '-ml-0.5',
        end: '-mr-0.5',
    }
}

export const Button = ({
                           color = 'default',
                           variant = 'filled',
                           size = 'md',
                           shape = 'rounded',
                           appearanceModifier,
                           sizeModifier,
                           icon,
                           iconPlacement,
                           isDisabled = false,
                           isLoading = false,
                           onClick,
                           href,
                           className,
                           iconClassName,
                           children,
                       }: ButtonProps) => {
    let HtmlTag: string | ReactNode | typeof Link = 'button';
    if (href) {
        HtmlTag = Link;
    }

    return <HtmlTag
        href={href}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        className={cn(
            'btn no-animation',
            classes.color[color],
            classes.variant[variant],
            classes.size[size],
            children == null && classes.noChildren.size[size],
            classes.shape[shape],
            appearanceModifier && classes.appearanceModifier[appearanceModifier],
            sizeModifier && classes.sizeModifier[sizeModifier],
            className
        )}
    >
        {isLoading ? <span
            className={cn('loading loading-spinner', iconClasses.size[size], children != null && iconClasses.iconPlacement[iconPlacement], iconClassName)}
        /> : icon &&
          <FontAwesomeIcon
            className={cn('text-inherit', iconClasses.size[size], children != null && iconClasses.iconPlacement[iconPlacement], iconClassName)}
            icon={icon}/>}
        {children}
    </HtmlTag>
}