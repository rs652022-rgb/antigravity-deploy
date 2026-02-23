"use client";

import React, { useState, useEffect } from "react";

interface EmailLinkProps {
    encodedUser: string;
    encodedDomain: string;
    className?: string;
    label?: string;
}

/**
 * A component that obfuscates email addresses from scrapers by using 
 * client-side decoding (Base64).
 */
export function EmailLink({ encodedUser, encodedDomain, className, label }: EmailLinkProps) {
    const [email, setEmail] = useState("");

    useEffect(() => {
        try {
            // Decode user and domain parts on the client side
            const user = atob(encodedUser);
            const domain = atob(encodedDomain);
            setEmail(`${user}@${domain}`);
        } catch (e) {
            console.error("Failed to decode email parts", e);
        }
    }, [encodedUser, encodedDomain]);

    if (!email) {
        return (
            <span className={className}>
                {label || "..."}
            </span>
        );
    }

    return (
        <a href={`mailto:${email}`} className={className}>
            {label || email}
        </a>
    );
}
