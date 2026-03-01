import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | AdmirerX',
    alternates: {
        canonical: 'https://admirerx.net/careers',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
