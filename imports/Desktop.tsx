import svgPaths from "./svg-eus4x8k8pd";
import imgTeamImage from "figma:asset/3eeadac1613c383913b27252b2d62c3bbadbfcd6.png";
import img2023 from "figma:asset/0274d8d0ba44512a060c4532512cd6e49d0ded11.png";
import imgTeamMemberImage from "figma:asset/4a8c5386699054a8d4be010c2c14d54f93a61bc4.png";
import imgTeamMemberImage1 from "figma:asset/aeafef84465901d7edd857e2e48a2fb8721b04a0.png";
import imgTeamMemberImage2 from "figma:asset/9acad2081f333cf7b16f647aa71fd6eb896923a4.png";
import imgTeamMemberImage3 from "figma:asset/ad5eff61062d9a6a10a60babaf42414952a529c8.png";

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

function TeamImage() {
  return (
    <div
      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[640px] rounded-2xl shrink-0 w-full"
      data-name="Team Image"
      style={{ backgroundImage: `url('${imgTeamImage}')` }}
    />
  );
}

function TeamContentContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Team Content Container"
    >
      <TeamImage />
      <div className="font-['Monarque:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] text-left tracking-[-3.2px] w-full">
        <p className="leading-[80px] text-[80px]">
          <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            Feathers is a clarity-led brand and digital agency helping startups
            and SMEs grow
          </span>
          <span className="font-['Monarque:Italic',_sans-serif] not-italic">
            through strategy and design.
          </span>
        </p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div
      className="max-w-[1440px] relative shrink-0 w-full"
      data-name="wrapper"
    >
      <div className="max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start max-w-inherit pb-20 pt-0 px-0 relative w-full">
          <TeamContentContainer />
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
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function Icon1Mono11() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-10"
      data-name="icon 1 mono (1) 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="icon 1 mono (1) 1">
          <path
            d={svgPaths.pc8a9e80}
            fill="var(--fill-0, #11375C)"
            id="Vector"
          />
          <path
            d={svgPaths.p31b5500}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative"
      data-name="Icon Container"
    >
      <Icon1Mono11 />
    </div>
  );
}

function New3() {
  return (
    <div
      className="[grid-area:1_/_1] h-10 ml-11 mt-0 relative w-[68.002px]"
      data-name="New 3"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 68 40"
      >
        <g id="New 3">
          <path
            d={svgPaths.p12f8700}
            fill="var(--fill-0, #525252)"
            id="Vector"
          />
          <path
            d={svgPaths.p13f8d8f0}
            fill="var(--fill-0, #525252)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p340d7400}
            fill="var(--fill-0, #525252)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p2ea79f00}
            fill="var(--fill-0, #525252)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p20d3ef80}
            fill="var(--fill-0, #525252)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p96b1500}
            fill="var(--fill-0, #525252)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p3a2c6e00}
            fill="var(--fill-0, #525252)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p23a0d880}
            fill="var(--fill-0, #525252)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p11e5be00}
            fill="var(--fill-0, #525252)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p35735100}
            fill="var(--fill-0, #525252)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p181a1200}
            fill="var(--fill-0, #525252)"
            id="Vector_11"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Icon Container"
    >
      <IconContainer />
      <New3 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div
      className="h-8 relative shrink-0 w-[139.962px]"
      data-name="Icon Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 140 32"
      >
        <g id="Icon Container">
          <g id="Notrify">
            <path d={svgPaths.p8996a00} fill="var(--fill-0, #7A7A7A)" />
            <path d={svgPaths.p2104a600} fill="var(--fill-0, #7A7A7A)" />
            <path d={svgPaths.p18afb00} fill="var(--fill-0, #7A7A7A)" />
            <path d={svgPaths.p33c8e680} fill="var(--fill-0, #7A7A7A)" />
            <path d={svgPaths.p36988a00} fill="var(--fill-0, #7A7A7A)" />
            <path d={svgPaths.p2ac659f0} fill="var(--fill-0, #7A7A7A)" />
            <path d={svgPaths.p11792080} fill="var(--fill-0, #7A7A7A)" />
          </g>
          <path
            d={svgPaths.p3a2c5300}
            fill="var(--fill-0, #1B42E0)"
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[36px]"
      data-name="Group"
    >
      <div className="absolute bottom-[-0.001%] left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <g id="Group">
            <path
              d={svgPaths.p6370300}
              fill="var(--fill-0, #141414)"
              id="Vector"
            />
            <path
              d={svgPaths.p21513200}
              fill="var(--fill-0, #141414)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p146cfb80}
              fill="var(--fill-0, #141414)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p24065980}
              fill="var(--fill-0, #141414)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p303a3f00}
              fill="var(--fill-0, #141414)"
              id="Vector_5"
            />
            <path
              d={svgPaths.p2e150600}
              fill="var(--fill-0, #141414)"
              id="Vector_6"
            />
            <path
              d={svgPaths.p31c7800}
              fill="var(--fill-0, #141414)"
              id="Vector_7"
            />
            <path
              d={svgPaths.p373b3a80}
              fill="var(--fill-0, #141414)"
              id="Vector_8"
            />
            <path
              d={svgPaths.p6c037f0}
              fill="var(--fill-0, #141414)"
              id="Vector_9"
            />
            <path
              d={svgPaths.p148f5e0}
              fill="var(--fill-0, #141414)"
              id="Vector_10"
            />
            <path
              d={svgPaths.p234a9300}
              fill="var(--fill-0, #141414)"
              id="Vector_11"
            />
            <path
              d={svgPaths.p3cbe9000}
              fill="var(--fill-0, #141414)"
              id="Vector_12"
            />
            <path
              d={svgPaths.p1609e800}
              fill="var(--fill-0, #141414)"
              id="Vector_13"
            />
            <path
              d={svgPaths.p3bc68e00}
              fill="var(--fill-0, #141414)"
              id="Vector_14"
            />
            <path
              d={svgPaths.p2a933332}
              fill="var(--fill-0, #141414)"
              id="Vector_15"
            />
            <path
              d={svgPaths.pd8b8580}
              fill="var(--fill-0, #141414)"
              id="Vector_16"
            />
            <path
              d={svgPaths.p35a04900}
              fill="var(--fill-0, #141414)"
              id="Vector_17"
            />
            <path
              d={svgPaths.p35638d00}
              fill="var(--fill-0, #141414)"
              id="Vector_18"
            />
            <path
              d={svgPaths.p34997d00}
              fill="var(--fill-0, #141414)"
              id="Vector_19"
            />
            <path
              d={svgPaths.p69a500}
              fill="var(--fill-0, #141414)"
              id="Vector_20"
            />
            <path
              d={svgPaths.p18006500}
              fill="var(--fill-0, #141414)"
              id="Vector_21"
            />
            <path
              d={svgPaths.p1646ed00}
              fill="var(--fill-0, #141414)"
              id="Vector_22"
            />
            <path
              d={svgPaths.pa9c2100}
              fill="var(--fill-0, #141414)"
              id="Vector_23"
            />
            <path
              d={svgPaths.p3b864ba0}
              fill="var(--fill-0, #141414)"
              id="Vector_24"
            />
            <path
              d={svgPaths.p1f943d80}
              fill="var(--fill-0, #141414)"
              id="Vector_25"
            />
            <path
              d={svgPaths.p13cabb00}
              fill="var(--fill-0, #141414)"
              id="Vector_26"
            />
            <path
              d={svgPaths.pf091200}
              fill="var(--fill-0, #141414)"
              id="Vector_27"
            />
            <path
              d={svgPaths.p326b2880}
              fill="var(--fill-0, #141414)"
              id="Vector_28"
            />
            <path
              d={svgPaths.p1a80de80}
              fill="var(--fill-0, #141414)"
              id="Vector_29"
            />
            <path
              d={svgPaths.p23dc7800}
              fill="var(--fill-0, #141414)"
              id="Vector_30"
            />
            <path
              d={svgPaths.p2d384a00}
              fill="var(--fill-0, #141414)"
              id="Vector_31"
            />
            <path
              d={svgPaths.p1ec2f200}
              fill="var(--fill-0, #141414)"
              id="Vector_32"
            />
            <path
              d={svgPaths.p23688470}
              fill="var(--fill-0, #141414)"
              id="Vector_33"
            />
            <path
              d={svgPaths.p1499e640}
              fill="var(--fill-0, #141414)"
              id="Vector_34"
            />
            <path
              d={svgPaths.p23de9600}
              fill="var(--fill-0, #141414)"
              id="Vector_35"
            />
            <path
              d={svgPaths.p21269000}
              fill="var(--fill-0, #141414)"
              id="Vector_36"
            />
            <path
              d={svgPaths.p3d67ae00}
              fill="var(--fill-0, #141414)"
              id="Vector_37"
            />
            <path
              d={svgPaths.p23c31d00}
              fill="var(--fill-0, #141414)"
              id="Vector_38"
            />
            <path
              d={svgPaths.p3f031b00}
              fill="var(--fill-0, #141414)"
              id="Vector_39"
            />
            <path
              d={svgPaths.p36278ff0}
              fill="var(--fill-0, #141414)"
              id="Vector_40"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="[grid-area:1_/_1] h-[19.599px] ml-[47.815px] mt-[7.645px] relative w-[132.88px]"
      data-name="Group"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 133 20"
        >
          <g id="Group">
            <path
              d={svgPaths.p1e25e680}
              fill="var(--fill-0, #141414)"
              id="Vector"
            />
            <path
              d={svgPaths.pd8e7b00}
              fill="var(--fill-0, #141414)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p247a6c00}
              fill="var(--fill-0, #141414)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p12465880}
              fill="var(--fill-0, #141414)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p2b65c500}
              fill="var(--fill-0, #141414)"
              id="Vector_5"
            />
            <path
              d={svgPaths.p19a1f480}
              fill="var(--fill-0, #141414)"
              id="Vector_6"
            />
            <path
              d={svgPaths.p38e4cd80}
              fill="var(--fill-0, #141414)"
              id="Vector_7"
            />
            <path
              d={svgPaths.pec5d200}
              fill="var(--fill-0, #141414)"
              id="Vector_8"
            />
            <path
              d={svgPaths.p37b72cc0}
              fill="var(--fill-0, #141414)"
              id="Vector_9"
            />
            <path
              d={svgPaths.p22d7dc80}
              fill="var(--fill-0, #141414)"
              id="Vector_10"
            />
            <path
              d={svgPaths.pb63fc00}
              fill="var(--fill-0, #141414)"
              id="Vector_11"
            />
            <path
              d={svgPaths.p83d1900}
              fill="var(--fill-0, #141414)"
              id="Vector_12"
            />
            <path
              d={svgPaths.pfb34900}
              fill="var(--fill-0, #141414)"
              id="Vector_13"
            />
            <path
              d={svgPaths.p1ead6600}
              fill="var(--fill-0, #141414)"
              id="Vector_14"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Icon Container"
    >
      <Group />
      <Group1 />
    </div>
  );
}

function IconContainer5() {
  return (
    <div
      className="h-[32px] relative shrink-0 w-[182.852px]"
      data-name="Icon Container"
    >
      <div className="absolute bottom-[-0.001%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 183 32"
        >
          <g id="Icon Container">
            <g id="AddGrid">
              <path d={svgPaths.p56e1300} fill="var(--fill-0, #005655)" />
              <path d={svgPaths.p845b200} fill="var(--fill-0, #005655)" />
              <path d={svgPaths.p3e14c871} fill="var(--fill-0, #005655)" />
              <path d={svgPaths.p8f89d80} fill="var(--fill-0, #005655)" />
              <path d={svgPaths.p11cc6800} fill="var(--fill-0, #005655)" />
              <path d={svgPaths.p38e4da80} fill="var(--fill-0, #005655)" />
              <path d={svgPaths.p16bb1880} fill="var(--fill-0, #005655)" />
            </g>
            <g id="Icon Container_2">
              <path
                d={svgPaths.p2b0d7480}
                fill="var(--fill-0, #00C71E)"
                id="Union"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p84dbc00}
                fill="var(--fill-0, #00C71E)"
                fillRule="evenodd"
                id="Union_2"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p338f5300}
                fill="var(--fill-0, #00C71E)"
                fillRule="evenodd"
                id="Union_3"
              />
              <path
                d={svgPaths.p1c56f180}
                fill="var(--fill-0, #00C71E)"
                id="Union_4"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-0 left-0 right-[-0.007%] top-[85.592%]"
      data-name="Group"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 10"
        >
          <g id="Group">
            <path
              d={svgPaths.p3625f300}
              fill="var(--fill-0, #01B091)"
              id="Vector"
            />
            <path
              d={svgPaths.p19168680}
              fill="var(--fill-0, #01B091)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p1f01b5c0}
              fill="var(--fill-0, #01B091)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p34044580}
              fill="var(--fill-0, #01B091)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p23a80f00}
              fill="var(--fill-0, #01B091)"
              id="Vector_5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute bottom-[31.295%] left-[20.418%] right-[19.665%] top-0"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 44"
      >
        <g id="Group">
          <path
            d={svgPaths.p2b3b88c0}
            fill="var(--fill-0, #01B091)"
            id="Vector"
          />
          <path
            d={svgPaths.p344f1c80}
            fill="var(--fill-0, #01B091)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-[-0.007%] top-0"
      data-name="Group"
    >
      <Group2 />
      <Group3 />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="h-[63px] overflow-clip relative shrink-0 w-20"
      data-name="Frame"
    >
      <Group4 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-16 items-center justify-center p-0 relative shrink-0"
      data-name="Section Container"
    >
      <IconContainer1 />
      <IconContainer2 />
      <IconContainer3 />
      <div
        className="bg-center bg-cover bg-no-repeat h-10 shrink-0 w-[250px]"
        data-name="2023"
        style={{ backgroundImage: `url('${img2023}')` }}
      />
      <IconContainer5 />
      <Frame />
      <div className="h-4 relative shrink-0 w-[297px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 297 16"
        >
          <g id="Vector">
            <path
              clipRule="evenodd"
              d={svgPaths.p3daa2980}
              fill="black"
              fillRule="evenodd"
            />
            <path d={svgPaths.p13f81b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p9d0a340} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2d8b8800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3d529400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p5e69500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2f38e300} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3e0d8080} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a9da00} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div
      className="max-w-[1440px] relative shrink-0 w-full"
      data-name="wrapper"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-20 relative w-full">
          <SectionContainer />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[223px] relative shrink-0 w-full" data-name="section">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[223px] items-center justify-center px-6 py-0 relative w-full">
          <Wrapper1 />
        </div>
      </div>
    </div>
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
              our services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full">
      <Button3 />
      <div
        className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[0px] text-left tracking-[-3.2px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[80px] text-[80px]">
          <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">{`We turn ideas into `}</span>
          <span>
            <br />
          </span>
          <span className="font-['Monarque:Italic',_sans-serif] not-italic">
            scalable
          </span>
          <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
            experiences
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#141414] text-[16px] text-left tracking-[-0.64px] w-full">
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Brand Performance Assessment</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Competitive Analysis</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Market Trend Analysis</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Stakeholder Interviews</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Perception Audit</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 grow max-w-[380px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit min-w-inherit pb-9 pt-0 px-0 relative w-full">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[24px] text-left tracking-[-0.96px] w-full">
            <p className="block leading-[32px]">
              {`Brand Audit `}
              <br />
              {`& Market Research`}
            </p>
          </div>
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-left text-neutral-600 tracking-[-0.64px] w-full">
            <p className="block leading-[24px]">
              We assess your current brand and study the market to uncover
              insights, gaps, and opportunities for clarity and differentiation.
            </p>
          </div>
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#141414] text-[16px] text-left tracking-[-0.64px] w-full">
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Big Idea Development</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Positioning Strategy</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">{`Brand Story & Strategic Narrative`}</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">{`Tone & Voice`}</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Brand Personality</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Brand Tagline</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 grow max-w-[380px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit min-w-inherit pb-9 pt-0 px-0 relative w-full">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[24px] text-left tracking-[-0.96px] w-full">
            <p className="block leading-[32px]">
              {`Brand Strategy `}
              <br />
              {`& Positioning`}
            </p>
          </div>
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-left text-neutral-600 tracking-[-0.64px] w-full">
            <p className="block leading-[24px]">
              We define your brand’s voice, values, and audience — building a
              focused strategy that helps you stand out and scale with purpose.
            </p>
          </div>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="[flex-flow:wrap] basis-0 box-border content-start flex gap-6 grow items-start justify-start min-h-px min-w-[500px] p-0 relative shrink-0">
      <Frame24 />
      <Frame21 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#141414] text-[16px] text-left tracking-[-0.64px] w-full">
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Visual Identity Design</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">{`Verbal Identity & Messaging`}</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">{`Brand & Product Naming`}</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Motion System Development</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Brand Architecture</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 grow max-w-[380px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit min-w-inherit pb-9 pt-0 px-0 relative w-full">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[24px] text-left tracking-[-0.96px] w-full">
            <p className="block leading-[32px]">
              {`Brand Identity `}
              <br />
              {`& Design`}
            </p>
          </div>
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-left text-neutral-600 tracking-[-0.64px] w-full">
            <p className="block leading-[24px]">
              From naming to logo, typography to visuals, we design cohesive
              brand systems that express who you are and what you stand for.
            </p>
          </div>
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#141414] text-[16px] text-left tracking-[-0.64px] w-full">
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">UI/UX Design</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">{`Website Design & Development`}</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Mobile App Design</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Product Prototyping</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Digital Experience Design</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[24px]">Content Management Systems</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 grow max-w-[380px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit min-w-inherit pb-9 pt-0 px-0 relative w-full">
          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[24px] text-left tracking-[-0.96px] w-full">
            <p className="block leading-[32px]">
              {`Web & Product `}
              <br />
              Development
            </p>
          </div>
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-left text-neutral-600 tracking-[-0.64px] w-full">
            <p className="block leading-[24px]">
              We design and build functional, user-centered websites and digital
              products that reflect your brand and drive engagement.
            </p>
          </div>
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="[flex-flow:wrap] basis-0 box-border content-start flex gap-6 grow items-start justify-start min-h-px min-w-[500px] p-0 relative shrink-0">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame82 />
      <Frame83 />
    </div>
  );
}

function InfoWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="info-wrapper"
    >
      <Frame10 />
      <Frame20 />
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
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
          <InfoWrapper />
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
          <Constrait />
        </div>
      </div>
    </div>
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
              our story
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
      <Button4 />
      <div
        className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[64px] text-left tracking-[-2.56px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[64px]">
          Rooted in London with a team across Nairobi, Berlin, and Toronto,
          Feathers began in 2019 in Nigeria—where culture and creativity shaped
          our belief that design should be bold, human, and built to lead.
        </p>
      </div>
    </div>
  );
}

function TeamTextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Team Text Container"
    >
      <TeamTextSubcontainer />
    </div>
  );
}

function Constrait1() {
  return (
    <div
      className="max-w-[1440px] relative shrink-0 w-full"
      data-name="constrait"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
          <TeamTextContainer />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="section">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[512px] items-center justify-center px-6 py-0 relative w-full">
          <Constrait1 />
        </div>
      </div>
    </div>
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
              our leadership
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamTextSubcontainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Team Text Subcontainer"
    >
      <Button5 />
      <div
        className="font-['Monarque:Regular',_sans-serif] leading-[0] max-w-[1156px] min-w-full not-italic relative shrink-0 text-[#141414] text-[0px] text-left tracking-[-2.56px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[64px] text-[64px]">
          <span>{`Our team comprises a mix of `}</span>
          <span className="font-['Monarque:Italic',_sans-serif] not-italic">
            multidisciplinary creatives
          </span>
        </p>
      </div>
    </div>
  );
}

function TeamMemberImage() {
  return (
    <div
      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[400px] rounded-2xl w-full"
      data-name="Team Member Image"
      style={{ backgroundImage: `url('${imgTeamMemberImage}')` }}
    />
  );
}

function TeamMemberTextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[16px] text-left tracking-[-0.64px] w-full"
      data-name="Team Member Text Container"
    >
      <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[#141414] w-full">
        <p className="block leading-[24px]">Sam Obadina</p>
      </div>
      <div className="font-['Onest:Regular',_sans-serif] font-normal relative shrink-0 text-neutral-600 w-full">
        <p className="block leading-[24px]">FOUNDER</p>
      </div>
    </div>
  );
}

function TeamMemberContainer() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-[300px] p-0 relative shrink-0"
      data-name="Team Member Container"
    >
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <TeamMemberImage />
        </div>
      </div>
      <TeamMemberTextContainer />
    </div>
  );
}

function TeamMemberImage1() {
  return (
    <div
      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[400px] rounded-2xl w-full"
      data-name="Team Member Image"
      style={{ backgroundImage: `url('${imgTeamMemberImage1}')` }}
    />
  );
}

function TeamMemberTextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[16px] text-left tracking-[-0.64px] w-full"
      data-name="Team Member Text Container"
    >
      <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[#141414] w-full">
        <p className="block leading-[24px]">Sam Obadina</p>
      </div>
      <div className="font-['Onest:Regular',_sans-serif] font-normal relative shrink-0 text-neutral-600 w-full">
        <p className="block leading-[24px]">FOUNDER</p>
      </div>
    </div>
  );
}

function TeamMemberContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-[300px] p-0 relative shrink-0"
      data-name="Team Member Container"
    >
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <TeamMemberImage1 />
        </div>
      </div>
      <TeamMemberTextContainer1 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="[flex-flow:wrap] basis-0 box-border content-center flex gap-6 grow items-center justify-start min-h-px min-w-[600px] p-0 relative shrink-0">
      <TeamMemberContainer />
      <TeamMemberContainer1 />
    </div>
  );
}

function TeamMemberImage2() {
  return (
    <div
      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[400px] rounded-2xl w-full"
      data-name="Team Member Image"
      style={{ backgroundImage: `url('${imgTeamMemberImage2}')` }}
    />
  );
}

function TeamMemberTextContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[16px] text-left tracking-[-0.64px] w-full"
      data-name="Team Member Text Container"
    >
      <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[#141414] w-full">
        <p className="block leading-[24px]">Sam Obadina</p>
      </div>
      <div className="font-['Onest:Regular',_sans-serif] font-normal relative shrink-0 text-neutral-600 w-full">
        <p className="block leading-[24px]">FOUNDER</p>
      </div>
    </div>
  );
}

function TeamMemberContainer2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-[300px] p-0 relative shrink-0"
      data-name="Team Member Container"
    >
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <TeamMemberImage2 />
        </div>
      </div>
      <TeamMemberTextContainer2 />
    </div>
  );
}

function TeamMemberImage3() {
  return (
    <div
      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[400px] rounded-2xl w-full"
      data-name="Team Member Image"
      style={{ backgroundImage: `url('${imgTeamMemberImage3}')` }}
    />
  );
}

function TeamMemberTextContainer3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[16px] text-left tracking-[-0.64px] w-full"
      data-name="Team Member Text Container"
    >
      <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[#141414] w-full">
        <p className="block leading-[24px]">Sam Obadina</p>
      </div>
      <div className="font-['Onest:Regular',_sans-serif] font-normal relative shrink-0 text-neutral-600 w-full">
        <p className="block leading-[24px]">FOUNDER</p>
      </div>
    </div>
  );
}

function TeamMemberContainer3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-[300px] p-0 relative shrink-0"
      data-name="Team Member Container"
    >
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <TeamMemberImage3 />
        </div>
      </div>
      <TeamMemberTextContainer3 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="[flex-flow:wrap] basis-0 box-border content-center flex gap-6 grow items-center justify-start min-h-px min-w-[600px] p-0 relative shrink-0">
      <TeamMemberContainer2 />
      <TeamMemberContainer3 />
    </div>
  );
}

function TeamMembersContainer() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Team Members Container"
    >
      <Frame81 />
      <Frame80 />
    </div>
  );
}

function TeamTextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Team Text Container"
    >
      <TeamTextSubcontainer1 />
      <TeamMembersContainer />
    </div>
  );
}

function Constrait2() {
  return (
    <div
      className="max-w-[1440px] relative shrink-0 w-full"
      data-name="constrait"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
          <TeamTextContainer1 />
        </div>
      </div>
    </div>
  );
}

function Section4() {
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

function Frame29() {
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
      <Frame29 />
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

function Button6() {
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
      <Button6 />
    </div>
  );
}

function Wrapper2() {
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
          <Wrapper2 />
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full"
      data-name="Desktop"
    >
      <Header />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <FooterSection />
    </div>
  );
}