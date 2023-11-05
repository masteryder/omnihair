"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ReactQueryStreamedHydration} from "@tanstack/react-query-next-experimental";
import {PropsWithChildren, useState} from "react";

function Providers({children}: PropsWithChildren) {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default Providers;