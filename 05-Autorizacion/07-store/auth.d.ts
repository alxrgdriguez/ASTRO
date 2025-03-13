import type { DefaultSession } from "@auth/core/types";

declare module '@auth/core/types' {
    

    interface User extends DefaultSession{
        role?: string;
    }

    interface Session extends DefaultSession{
        user: User;
    }
}