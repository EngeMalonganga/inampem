import { InapemLogo } from './components/InapemLogo';

interface CertificateField {
  label: string;
  value: string;
  isHighlighted?: boolean;
  isTabular?: boolean;
}

const CERTIFICATE_FIELDS: CertificateField[] = [
  {
    label: 'Nome',
    value: 'NEW VIEWER SYSTEM COMÉRCIO GERAL E PRESTAÇÃO DE SERVIÇOS LDA',
  },
  {
    label: 'NIF',
    value: '5417528684',
    isTabular: true,
  },
  {
    label: 'Data de certificação',
    value: '11/11/2026',
    isTabular: true,
  },
  {
    label: 'Validade',
    value: '11/11/2027',
    isHighlighted: true,
    isTabular: true,
  },
  {
    label: 'Classificação',
    value: 'Micro empresa',
  },
  {
    label: 'Província',
    value: 'Luanda',
  },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#4e5563]">
      {/* Header Banner */}
      <header className="w-full h-[185px] sm:h-[215px] flex items-center justify-center px-6 bg-[linear-gradient(175deg,#e99532_0%,#e56d28_52%,#de4626_100%)]">
        <InapemLogo />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <section
          aria-labelledby="certificate-heading"
          className="w-full max-w-[760px] mx-auto px-6 sm:px-10 pt-9 pb-16 sm:pt-12"
        >
          <h1
            id="certificate-heading"
            className="text-[22px] sm:text-[24px] font-medium tracking-[-0.015em] text-[#4d5462] mb-6 sm:mb-8"
          >
            Certificado Digital
          </h1>

          <dl className="divide-y divide-[#eceef2] border-b border-[#eceef2]">
            {CERTIFICATE_FIELDS.map((field) => (
              <div
                key={field.label}
                className="grid grid-cols-[158px_1fr] sm:grid-cols-[240px_1fr] items-start gap-3 sm:gap-6 py-4 sm:py-5"
              >
                <dt className="text-[14.5px] sm:text-[15.5px] font-semibold text-[#545c69] leading-snug">
                  {field.label}
                </dt>
                <dd
                  className={`text-[14.5px] sm:text-[15.5px] leading-snug break-words ${
                    field.isTabular ? 'tabular-nums' : ''
                  } ${
                    field.isHighlighted
                      ? 'font-medium text-[#c94d5c]'
                      : 'font-normal text-[#747b87]'
                  }`}
                >
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </div>
  );
}
