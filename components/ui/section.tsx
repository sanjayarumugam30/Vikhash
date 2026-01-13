import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-20 lg:py-24 relative overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
}
