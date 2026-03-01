import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | AdmirerX',
    alternates: {
        canonical: 'https://admirerx.net/contact-us',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
