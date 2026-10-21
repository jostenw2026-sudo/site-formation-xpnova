import { IconeWhatsApp } from '@/components/BoutonWhatsApp';
import { lienWhatsapp, MESSAGES } from '@/lib/whatsapp-public';

export default function ContactPageEN() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Contact us</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Our team of pedagogical engineers is available to support you in your professional training projects.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 p-5 bg-white rounded border border-[#E2E5EC] flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-[#5A6072] flex-1">Prefer WhatsApp? Message us directly, an expert replies within 48 working hours.</p>
            <a
              href={lienWhatsapp(MESSAGES.en.defaut)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded font-semibold hover:bg-[#1ebe5b] transition-colors"
            >
              <IconeWhatsApp />
              Message us on WhatsApp
            </a>
          </div>
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Direct contact</h2>
            <p className="text-[#5A6072] mb-2">
              <strong>Email:</strong> <a href="mailto:hello@xp-nova.com" className="text-[#D4A017] hover:underline">hello@xp-nova.com</a>
            </p>
            <p className="text-[#5A6072] mb-2">
              <strong>Phone:</strong> +237 670 034 000
            </p>
            <p className="text-[#5A6072]">
              <strong>Address:</strong> 134, Rue 1813, Vallée Bastos — B.P. 5603, Nlongkak, Yaoundé, Cameroon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
