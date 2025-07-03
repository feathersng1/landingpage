import svgPaths from "./svg-ojio9iwcmh";

function Group47860() {
  return (
    <div className="h-8 relative shrink-0 w-[118.095px]">
      <div className="absolute bottom-0 left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 119 32"
        >
          <g id="Group 47860">
            <path
              clipRule="evenodd"
              d={svgPaths.p1bace600}
              fill="var(--fill-0, #A3A3A3)"
              fillRule="evenodd"
              id="Subtract"
            />
            <g id="feathers">
              <path d={svgPaths.p374c1c00} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p280e7080} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p21a1f900} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p21c62d40} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p25a4d080} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p1ebd1e90} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p3549cf0} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p26db2900} fill="var(--fill-0, #525252)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-lg shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              the people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#85ffd7] relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              our blogs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-3" data-name="Component">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Component">
          <path
            clipRule="evenodd"
            d={svgPaths.p2eb0b280}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#141414] relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              start a project
            </p>
          </div>
          <Component />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row gap-8 items-center justify-start p-0 relative shrink-0">
      <Frame2 />
      <Button2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Group47860 />
      <Frame1 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[24px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}