import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="w-[1440px] h-[1669px] px-12 pt-32 pb-12 bg-zinc-100 bg-opacity-0 flex-col justify-start items-start inline-flex">
  <div className="self-stretch pb-20 justify-start items-start inline-flex">
    <div className="text-neutral-800 text-[88px] font-medium font-['Inter'] leading-[88px]">Typography</div>
  </div>
  <div className="self-stretch pb-10 justify-start items-start inline-flex">
    <div className="grow shrink basis-0 text-neutral-800 text-2xl font-bold font-['Inter'] leading-relaxed">Font Styles</div>
  </div>
  <div className="self-stretch h-[1259px] flex-col justify-start items-start gap-12 flex">
    <div className="self-stretch h-[166px] pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
          <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs1</div>
        </div>
        <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">Large Title</div>
      </div>
      <div className="self-stretch text-neutral-800 text-[32px] font-normal font-['Poppins'] leading-9">Heading</div>
      <div className="self-stretch text-neutral-800 text-[32px] font-medium font-['Poppins'] leading-9">Heading</div>
    </div>
    <div className="self-stretch h-[158px] pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
          <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs2</div>
        </div>
        <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">H1</div>
      </div>
      <div className="self-stretch text-neutral-800 text-[28px] font-normal font-['Poppins'] leading-[30.80px]">Heading</div>
      <div className="self-stretch text-neutral-800 text-[28px] font-medium font-['Poppins'] leading-[30.80px]">Heading</div>
    </div>
    <div className="self-stretch h-36 pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
          <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs3</div>
        </div>
        <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">H2</div>
      </div>
      <div className="self-stretch text-neutral-800 text-[22px] font-normal font-['Poppins'] leading-normal">Heading</div>
      <div className="self-stretch text-neutral-800 text-[22px] font-medium font-['Poppins'] leading-normal">Heading</div>
    </div>
    <div className="self-stretch h-[140px] pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
          <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs4</div>
        </div>
        <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">H3</div>
      </div>
      <div className="self-stretch text-neutral-800 text-xl font-normal font-['Poppins'] leading-snug">Heading</div>
      <div className="self-stretch text-neutral-800 text-xl font-medium font-['Poppins'] leading-snug">Heading</div>
    </div>
    <div className="self-stretch h-[519px] pb-8 flex-col justify-start items-start gap-4 flex">
      <div className="self-stretch h-[487px] pb-8 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[106px] pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
              <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs5</div>
            </div>
            <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">Paragraph Headline</div>
          </div>
          <div className="self-stretch opacity-70 text-neutral-800 text-[17px] font-normal font-['Poppins'] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</div>
        </div>
        <div className="self-stretch h-[98px] pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
              <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs5.1</div>
            </div>
            <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">Paragraph Body</div>
          </div>
          <div className="self-stretch opacity-70 text-neutral-800 text-xs font-normal font-['Poppins'] leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</div>
        </div>
        <div className="self-stretch h-[103px] pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
              <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs6</div>
            </div>
            <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">Subheadline</div>
          </div>
          <div className="self-stretch opacity-70 text-neutral-800 text-[15px] font-normal font-['Poppins'] leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</div>
        </div>
        <div className="self-stretch h-[100px] pb-8 border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="px-[18px] py-1.5 bg-blue-300 rounded-lg justify-center items-center flex">
              <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">fs7</div>
            </div>
            <div className="text-neutral-800 text-lg font-normal font-['Inter'] leading-[27px]">Footnote</div>
          </div>
          <div className="self-stretch opacity-70 text-neutral-800 text-[13px] font-normal font-['Poppins'] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
