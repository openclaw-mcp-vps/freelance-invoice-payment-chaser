import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceChaser – Automated Invoice Follow-ups for Freelancers',
  description: 'Stop chasing payments manually. InvoiceChaser sends polite, escalating email reminders for overdue invoices so you get paid faster.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7c90a937-7226-4ba6-89e8-459237d4be13"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
