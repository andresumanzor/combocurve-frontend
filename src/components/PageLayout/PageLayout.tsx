import { NextSeo } from 'next-seo';
import { ReactNode, useRef } from 'react';
import { default as classNames } from 'classnames';

export type PageLayoutProps = {
    children: ReactNode;
    title: string;
    backgroundColor?: string;
    avoidOverflowHidden?: boolean;
};

export const PageLayout = (props: PageLayoutProps) => {
    const { title, children } = props;
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className={classNames('block', {
                'overflow-clip': props.avoidOverflowHidden,
                'overflow-hidden': !props.avoidOverflowHidden,
            })}
        >
            <NextSeo title={title} />

            <div className="container mx-auto my-8">{children}</div>
        </div>
    );
};
