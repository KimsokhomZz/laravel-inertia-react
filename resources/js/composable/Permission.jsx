import { usePage } from "@inertiajs/react";

export function Permission() {
    const user = usePage().props.auth.user;

    const hasRole = (name) => user.role.includes(name);
    const hasPermission = (name) => user.permission.includes(name);
    return { hasRole, hasPermission };
}