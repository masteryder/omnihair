import {Sidebar} from "./components/Sidebar";

export default function Home() {
    return (
        <div className={'flex'}>
            <Sidebar/>
            <main className="bg-neutral w-full flex min-h-screen flex-col items-center justify-between p-2">
                <div className={'bg-base-100 rounded-md h-full w-full'}>

                </div>
            </main>
        </div>
    )
}
