import { useTeam } from '../hooks/useSupabase'
import { ImageWithFallback } from './figma/ImageWithFallback'

function TeamMember({ image, name, role }: { image: string; name: string; role: string }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-center w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="w-full h-[400px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden bg-neutral-100">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover rotate-[180deg] scale-y-[-100%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="font-onest-medium text-[#141414] w-full">
          <p className="leading-[24px]">{name}</p>
        </div>
        <div className="font-onest-regular text-neutral-600 w-full">
          <p className="leading-[24px]">{role}</p>
        </div>
      </div>
    </div>
  );
}

function TeamSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 w-full">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col gap-3 w-full animate-pulse">
          <div className="w-full h-[400px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl bg-neutral-200" />
          <div className="flex flex-col gap-1 w-full">
            <div className="h-6 bg-neutral-200 rounded w-3/4" />
            <div className="h-4 bg-neutral-200 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Team() {
  const { team, loading, error } = useTeam();

  if (error) {
    console.error('Error loading team:', error);
    // Fallback to showing skeleton or empty state
  }

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 sm:px-4 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] sm:py-12 relative w-full">
                <div className="box-border content-stretch flex flex-col gap-16 sm:gap-12 items-start justify-start p-0 relative shrink-0 w-full">
                  
                  {/* Header */}
                  <div className="box-border content-stretch flex flex-col gap-10 sm:gap-8 items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="relative rounded-lg shrink-0">
                      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                          <div className="font-onest-medium relative shrink-0 text-[#141414] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">our leadership</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="font-monarque leading-[0] max-w-[1156px] min-w-full not-italic relative shrink-0 text-[#141414] text-left tracking-[-2.56px] sm:tracking-[-1.92px]">
                      <p className="leading-[64px] sm:leading-[48px] text-[48px] sm:text-[36px] md:text-[64px]">
                        <span>Our team comprises a mix of </span>
                        <span className="font-monarque-italic">
                          multidisciplinary
                          <br />
                          creatives
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Team Members - Dynamic from Supabase */}
                  {loading ? (
                    <TeamSkeleton />
                  ) : team && team.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 w-full">
                      {team.map((member) => (
                        <TeamMember
                          key={member.id}
                          image={member.image_url}
                          name={member.name}
                          role={member.role}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-neutral-500">No team members found.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}