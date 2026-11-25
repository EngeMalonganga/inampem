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
    value: '21/11/2026',
    isTabular: true,
  },
  {
    label: 'Validade',
    value: '21/11/2027',
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
    <div className="min-h-dvh flex flex-col overflow-x-hidden bg-white text-[#4e5563]">
      {/* Header Banner */}
      <header className="w-full flex items-center justify-center px-4 py-8 sm:h-[215px] sm:px-6 sm:py-0 bg-[linear-gradient(175deg,#e99532_0%,#e56d28_52%,#de4626_100%)]">
        <InapemLogo />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <section
          aria-labelledby="certificate-heading"
          className="w-full max-w-[760px] mx-auto px-4 sm:px-10 pt-7 pb-12 sm:pt-12 sm:pb-16"
        >
          <h1
            id="certificate-heading"
            className="text-[20px] sm:text-[24px] font-medium tracking-[-0.015em] text-[#4d5462] mb-4 sm:mb-8"
          >
            Certificado Digital
          </h1>

          <dl className="divide-y divide-[#eceef2] border-b border-[#eceef2]">
            {CERTIFICATE_FIELDS.map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-1 py-4 sm:grid sm:grid-cols-[240px_1fr] sm:items-start sm:gap-6 sm:py-5"
              >
                <dt className="text-[12.5px] sm:text-[15.5px] font-semibold uppercase tracking-[0.04em] sm:normal-case sm:tracking-normal text-[#8a919c] sm:text-[#545c69] leading-snug">
                  {field.label}
                </dt>
                <dd
                  className={`text-[15px] sm:text-[15.5px] leading-snug break-words ${
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
