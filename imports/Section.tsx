function Button() {
  return (
    <div className="relative rounded-lg shrink-0" data-name="Button">
      <div className="absolute border border-neutral-600 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] text-left text-neutral-100 text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              our values
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamTextSubcontainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Team Text Subcontainer"
    >
      <Button />
      <div className="font-['Monarque:Regular',_sans-serif] leading-[0] max-w-[811.29px] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-left tracking-[-3.2px] w-[811.29px]">
        <p className="leading-[80px] text-[80px]">
          <span>{`We move fast, think smart, and show up `}</span>
          <span className="adjustLetterSpacing font-['Monarque:Italic',_sans-serif] not-italic">
            when it counts
          </span>
        </p>
      </div>
    </div>
  );
}

function TeamTextSubcontainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] max-w-[400px] min-h-px min-w-[300px] p-0 relative shrink-0 text-[#ffffff] text-left"
      data-name="Team Text Subcontainer"
    >
      <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[24px] tracking-[-0.96px] w-[200px]">
        <p className="leading-[32px]">
          <span>{`Clarity, `}</span>
          <span className="adjustLetterSpacing text-neutral-400">
            clear outcome
          </span>
        </p>
      </div>
      <div
        className="font-['Onest:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[16px] tracking-[-0.64px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">
          We cut through noise to help you focus—on what matters, what works,
          and what gets your brand seen and remembered.
        </p>
      </div>
    </div>
  );
}

function TeamTextSubcontainer2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] max-w-[400px] min-h-px min-w-[300px] p-0 relative shrink-0 text-[#ffffff] text-left"
      data-name="Team Text Subcontainer"
    >
      <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[24px] tracking-[-0.96px] w-[200px]">
        <p className="leading-[32px]">
          Analytical,
          <span className="adjustLetterSpacing text-neutral-400">{` data-backed`}</span>
        </p>
      </div>
      <div
        className="font-['Onest:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[16px] tracking-[-0.64px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">
          Strategy isn’t guesswork. We dig into the data, connect the dots, and
          design with insight so you grow with purpose.
        </p>
      </div>
    </div>
  );
}

function TeamTextSubcontainer3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] max-w-[400px] min-h-px min-w-[300px] p-0 relative shrink-0 text-[#ffffff] text-left"
      data-name="Team Text Subcontainer"
    >
      <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[24px] tracking-[-0.96px] w-[200px]">
        <p className="leading-[32px]">
          <span>{`Reliable, `}</span>
          <span className="adjustLetterSpacing text-neutral-400">
            always dependable
          </span>
        </p>
      </div>
      <div
        className="font-['Onest:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[16px] tracking-[-0.64px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">
          No flaking, no fluff. Just a team you can count on to deliver—on time,
          on point, and always in sync with your hustle.
        </p>
      </div>
    </div>
  );
}

function TeamTextSubcontainer4() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start max-w-[950px] p-0 relative shrink-0 w-full"
      data-name="Team Text Subcontainer"
    >
      <TeamTextSubcontainer1 />
      <TeamTextSubcontainer2 />
      <TeamTextSubcontainer3 />
    </div>
  );
}

function TeamTextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Team Text Container"
    >
      <TeamTextSubcontainer />
      <TeamTextSubcontainer4 />
    </div>
  );
}

function Constrait() {
  return (
    <div
      className="max-w-[1440px] relative shrink-0 w-full"
      data-name="constrait"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-20 relative w-full">
          <TeamTextContainer />
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="section">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative size-full">
          <Constrait />
        </div>
      </div>
    </div>
  );
}