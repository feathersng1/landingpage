import { useServices } from '../hooks/useSupabase'

function ServiceCard({ title, description, services }: { title: string; description: string; services: string[] }) {
  return (
    <div className="basis-0 grow max-w-[380px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit min-w-inherit pb-9 pt-0 px-0 relative w-full">
          <div className="font-['Onest:Medium',_sans-serif] relative shrink-0 text-[#141414] w-full">
            <p className="leading-[32px]" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-neutral-600 w-full">
            <p className="leading-[24px]">{description}</p>
          </div>
          <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] gap-2 items-start justify-start p-0 relative shrink-0 text-[#141414] w-full">
            {services.map((service, index) => (
              <div key={index} className="relative shrink-0 w-full">
                <p className="leading-[24px]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { services, loading, error } = useServices();

  if (error) {
    console.error('Error loading services:', error);
  }

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
                <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full">

                  {/* Header */}
                  <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="relative rounded-lg shrink-0">
                      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                          <div className="font-['Onest:Medium',_sans-serif] relative shrink-0 text-[#141414] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">our services</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[0px] text-left tracking-[-3.2px]">
                      <p className="leading-[80px] text-[64px] md:text-[80px]">
                        <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                          We turn ideas into<br />
                        </span>
                        <span className="font-['Monarque:Italic',_sans-serif] not-italic">
                          scalable&nbsp;
                        </span>
                        <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                          experiences
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Service Cards - Dynamic from Supabase */}
                  <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full">
                    {loading ? (
                      <div className="flex gap-6 w-full overflow-hidden">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="basis-0 grow h-[300px] bg-neutral-100 animate-pulse rounded-2xl" />
                        ))}
                      </div>
                    ) : services && services.length > 0 ? (
                      <div className="[flex-flow:wrap] flex gap-6 w-full">
                        {services.map((service) => (
                          <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            services={service.features}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 w-full">
                        <p className="text-neutral-500">No services found.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}