import '../styles/tailwind.css'

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <main className="min-h-screen max-h-screen h-screen w-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
            {children}
        </main>
    )
}
