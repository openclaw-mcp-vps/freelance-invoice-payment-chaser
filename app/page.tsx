export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Automated Invoice Reminders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop chasing payments.<br />
          <span className="text-[#58a6ff]">Let InvoiceChaser do it.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically send polite, escalating email reminders for overdue invoices.
          Track payment status and get paid faster — without the awkward follow-ups.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { emoji: "📬", title: "Auto Reminders", desc: "Scheduled emails sent on your behalf at the right time." },
            { emoji: "📈", title: "Escalating Tone", desc: "Friendly first, firm later — automatically adjusted." },
            { emoji: "✅", title: "Payment Tracking", desc: "Mark invoices paid and stop reminders instantly." }
          ].map(({ emoji, title, desc }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{emoji}</div>
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] text-sm font-medium uppercase tracking-wide mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to get paid on time</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices tracked",
              "Automated email reminders",
              "Escalating tone sequences",
              "Payment status dashboard",
              "Custom reminder schedules",
              "Email delivery via Resend"
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does InvoiceChaser send reminders?",
              a: "We use Resend to deliver professional emails on your behalf. You connect your invoice details and we handle the scheduling automatically."
            },
            {
              q: "Can I customize the reminder messages?",
              a: "Yes. You can edit the tone and content of each reminder stage — from the initial polite nudge to the firm final notice."
            },
            {
              q: "What happens when an invoice is paid?",
              a: "Simply mark it as paid in your dashboard and all future reminders for that invoice stop immediately."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} InvoiceChaser. All rights reserved.
      </footer>
    </main>
  )
}
