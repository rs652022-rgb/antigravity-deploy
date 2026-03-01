import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | AdmirerX',
    alternates: {
        canonical: 'https://admirerx.net/about',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
