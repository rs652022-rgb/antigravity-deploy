import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BPO Services | AdmirerX',
    alternates: {
        canonical: 'https://admirerx.net/elevate-your-operations',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
