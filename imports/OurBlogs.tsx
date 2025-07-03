import svgPaths from "./svg-rrg2hoh99i";
import imgBlogImage from "figma:asset/073942923964aeb6f24c219317ffe9268dd288eb.png";
import imgBlogImage1 from "figma:asset/28678cbf959186ceeeb5a85ee09a72a1519f96f5.png";
import imgBlogImage2 from "figma:asset/d223ca7cc66495a3d4f34b9514c77380077e0e70.png";
import imgBlogImage3 from "figma:asset/55ce54ee95d8893681ecdd2fb248c610f65fdf6c.png";

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
    <div className="relative rounded-lg shrink-0" data-name="Button">
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

function Header() {
  return (
    <div
      className="bg-[#ffffff] h-20 relative shrink-0 w-full"
      data-name="header"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-20 items-start justify-start p-[24px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function BlogImage() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[480px] rounded-2xl shrink-0 w-full"
      data-name="Blog Image"
      style={{ backgroundImage: `url('${imgBlogImage}')` }}
    />
  );
}

function Button3() {
  return (
    <div className="relative rounded-lg shrink-0" data-name="Button">
      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              news
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogTextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Text Container"
    >
      <Button3 />
      <div
        className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[64px] text-center tracking-[-2.56px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[64px]">
          We turn ideas into scalable experiences
        </p>
      </div>
      <div
        className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-neutral-600 tracking-[-0.96px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">
          We define your brand’s voice, values, and audience — building a
          focused strategy that helps you stand out and scale with purpose.
        </p>
      </div>
    </div>
  );
}

function BlogPostContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Post Container"
    >
      <BlogImage />
      <BlogTextContainer />
    </div>
  );
}

function Constrait() {
  return (
    <div
      className="max-w-[960px] relative shrink-0 w-full"
      data-name="constrait"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
          <BlogPostContainer />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <Constrait />
        </div>
      </div>
    </div>
  );
}

function BlogImage1() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[480px] rounded-2xl shrink-0 w-full"
      data-name="Blog Image"
      style={{ backgroundImage: `url('${imgBlogImage1}')` }}
    />
  );
}

function Button4() {
  return (
    <div className="relative rounded-lg shrink-0" data-name="Button">
      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              opinion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogTextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Text Container"
    >
      <Button4 />
      <div
        className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[64px] text-center tracking-[-2.56px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[64px]">
          We turn ideas into scalable experiences
        </p>
      </div>
      <div
        className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-neutral-600 tracking-[-0.96px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">
          We define your brand’s voice, values, and audience — building a
          focused strategy that helps you stand out and scale with purpose.
        </p>
      </div>
    </div>
  );
}

function BlogPostContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Post Container"
    >
      <BlogImage1 />
      <BlogTextContainer1 />
    </div>
  );
}

function Constrait1() {
  return (
    <div
      className="max-w-[960px] relative shrink-0 w-full"
      data-name="constrait"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
          <BlogPostContainer1 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <Constrait1 />
        </div>
      </div>
    </div>
  );
}

function BlogImage2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[480px] rounded-2xl shrink-0 w-full"
      data-name="Blog Image"
      style={{ backgroundImage: `url('${imgBlogImage2}')` }}
    />
  );
}

function Button5() {
  return (
    <div className="relative rounded-lg shrink-0" data-name="Button">
      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              news
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogTextContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Text Container"
    >
      <Button5 />
      <div
        className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[64px] text-center tracking-[-2.56px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[64px]">
          We turn ideas into scalable experiences
        </p>
      </div>
      <div
        className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-neutral-600 tracking-[-0.96px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">
          We define your brand’s voice, values, and audience — building a
          focused strategy that helps you stand out and scale with purpose.
        </p>
      </div>
    </div>
  );
}

function BlogPostContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Post Container"
    >
      <BlogImage2 />
      <BlogTextContainer2 />
    </div>
  );
}

function Constrait2() {
  return (
    <div
      className="max-w-[960px] relative shrink-0 w-full"
      data-name="constrait"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
          <BlogPostContainer2 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <Constrait2 />
        </div>
      </div>
    </div>
  );
}

function BlogImage3() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[480px] rounded-2xl shrink-0 w-full"
      data-name="Blog Image"
      style={{ backgroundImage: `url('${imgBlogImage3}')` }}
    />
  );
}

function Button6() {
  return (
    <div className="relative rounded-lg shrink-0" data-name="Button">
      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              press
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogTextContainer3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Text Container"
    >
      <Button6 />
      <div
        className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[64px] text-center tracking-[-2.56px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[64px]">
          We turn ideas into scalable experiences
        </p>
      </div>
      <div
        className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-neutral-600 tracking-[-0.96px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">
          We define your brand’s voice, values, and audience — building a
          focused strategy that helps you stand out and scale with purpose.
        </p>
      </div>
    </div>
  );
}

function BlogPostContainer3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Blog Post Container"
    >
      <BlogImage3 />
      <BlogTextContainer3 />
    </div>
  );
}

function Constrait3() {
  return (
    <div
      className="max-w-[960px] relative shrink-0 w-full"
      data-name="constrait"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
          <BlogPostContainer3 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <Constrait3 />
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-start p-0 relative shrink-0"
      data-name="marquee"
    >
      <div className="font-['Monarque:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap">
        <p className="leading-[80px] text-[80px] whitespace-pre">
          <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            Let’s
          </span>
          <span>{` work `}</span>
          <span className="adjustLetterSpacing font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            together
          </span>
        </p>
      </div>
      <div className="relative shrink-0 size-12" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 48"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p2e33b700}
            fill="var(--fill-0, #F5FFFC)"
            fillOpacity="0.96"
            fillRule="evenodd"
            id="Vector"
            opacity="0.12"
          />
        </svg>
      </div>
      <div className="font-['Monarque:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap">
        <p className="leading-[80px] text-[80px] whitespace-pre">
          <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            Let’s
          </span>
          <span>{` work `}</span>
          <span className="adjustLetterSpacing font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            together
          </span>
        </p>
      </div>
      <div className="relative shrink-0 size-12" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 48"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p2e33b700}
            fill="var(--fill-0, #F5FFFC)"
            fillOpacity="0.96"
            fillRule="evenodd"
            id="Vector"
            opacity="0.12"
          />
        </svg>
      </div>
      <div className="font-['Monarque:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap">
        <p className="leading-[80px] text-[80px] whitespace-pre">
          <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            Let’s
          </span>
          <span>{` work `}</span>
          <span className="adjustLetterSpacing font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            together
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] font-normal gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-center text-neutral-400 tracking-[-0.64px] w-full">
      <div className="relative shrink-0 text-[0px] text-nowrap">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-[16px] tracking-[-0.64px] whitespace-pre">
          hello@feathers.com.co
        </p>
      </div>
      <div
        className="max-w-[400px] min-w-full relative shrink-0 text-[16px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">
          Suite 691 37 Westminster Buildings, Theatre Square, Nottingham, NG1
          6LG
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Onest:Regular',_sans-serif] font-normal gap-6 items-start justify-center leading-[0] p-0 relative shrink-0 text-[0px] text-center text-neutral-400 text-nowrap tracking-[-0.64px] w-full">
      <div className="relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-[16px] text-neutral-400 text-nowrap tracking-[-0.64px] whitespace-pre">
          TWITTER (X)
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-[16px] text-neutral-400 text-nowrap tracking-[-0.64px] whitespace-pre">
          INSTAGRAM
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block font-['Onest:Regular',_sans-serif] font-normal leading-[24px] text-[16px] text-neutral-400 text-nowrap tracking-[-0.64px] whitespace-pre">
          LINKEDIN
        </p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Onest:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-neutral-600 tracking-[-0.64px]">
        <p className="block leading-[24px]">
          ©2020-2025 Feathers Creative Ltd.
        </p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame25 />
      <Frame34 />
    </div>
  );
}

function Component1() {
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

function Button7() {
  return (
    <div
      className="bg-[#141414] relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              start project
            </p>
          </div>
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function ContactWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-14 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="contact-wrapper"
    >
      <Frame32 />
      <Frame35 />
      <Button7 />
    </div>
  );
}

function Wrapper() {
  return (
    <div
      className="max-w-[1440px] relative shrink-0 w-full"
      data-name="wrapper"
    >
      <div className="flex flex-col items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[46px] items-center justify-start max-w-inherit pb-[297px] pt-20 px-0 relative w-full">
          <Marquee />
          <ContactWrapper />
        </div>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div
      className="bg-[#141414] relative shrink-0 w-full"
      data-name="footer section"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div
            className="absolute bottom-[-82.016px] h-[310.515px] translate-x-[-50%] w-[1530.71px]"
            data-name="feathers-scape"
            style={{ left: "calc(50% + 28.7699px)" }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1531 311"
            >
              <g id="feathers-scape" opacity="0.32">
                <path d={svgPaths.p938b080} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p1341bb00} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p7671080} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p324f8f00} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p1607be00} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p2bfe3880} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p4816b80} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p28b00900} fill="var(--fill-0, #525252)" />
              </g>
            </svg>
          </div>
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

export default function OurBlogs() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="our blogs"
    >
      <Header />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <FooterSection />
    </div>
  );
}