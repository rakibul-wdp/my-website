import { P, SubTitle } from '@/components/typography'
import { TabsContent } from '@/components/ui/tabs'
import { FC } from 'react'

export interface IPolicyList {
  id: number
  policy: string
}

export const policyList: IPolicyList[] = [
  {
    id: 1,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at. Viverra gravida mi eu turpis morbi. Auctor ut consequat commodo sit. Dis tellus turpis sed leo urna vel sed velit tempor.',
  },
  {
    id: 2,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at. Viverra gravida mi eu turpis morbi. Auctor ut consequat commodo sit. Dis tellus turpis sed leo urna vel sed velit tempor.',
  },
  {
    id: 3,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at.',
  },
  {
    id: 4,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at. Viverra gravida mi eu turpis morbi. Auctor ut consequat commodo sit. Dis tellus turpis sed leo urna vel sed velit tempor.',
  },
]

export const Policies: FC = () => {
  return (
    <TabsContent
      value="policies"
      className="w-full mt-0 bg-card-BG-Color-2/50 md:border border-secondary/5 md:rounded"
    >
      <div className="bg-accent py-3 md:py-[18px] px-[14px] md:px-[30px] flex items-start justify-between mb-[19px] md:mb-[31px] rounded">
        <P variant="P1" className="font-semibold">
          Package Policy
        </P>
      </div>

      <div className="px-5 md:px-[30px] pb-[25px] md:pb-14">
        <ul className="list-disc marker:text-red-500 list-outside flex flex-col items-start justify-center gap-[11px] md:gap-4 mx-4">
          {policyList.map(({ id, policy }) => (
            <li key={id}>
              <P variant="P1" className="inline">
                {policy}
              </P>
            </li>
          ))}
        </ul>

        <div className="mt-[19px] md:mt-[76px] bg-white border rounded-[5px] p-5 md:pb-14 md:pr-[78px]">
          <SubTitle variant="H4">Package Data Change Policy</SubTitle>
          <P
            variant="P1"
            className="font-semibold font-montserrat text-primary mt-[1px] md:mt-[6px] md:mb-2"
          >
            Date Change Possible till 19th Nov
          </P>
          <P variant="P1">After that Package date cannot be dinged</P>

          <div className="relative flex items-center w-full mt-[3px] md:mt-[22px] mb-[9px] md:mb-[30px]">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary transform -translate-y-1/2"></div>
            <div className="absolute left-9 z-10 w-2 md:w-3 h-2 md:h-3 bg-primary rounded-full"></div>
            <div className="flex-1"></div>
            <div className="absolute right-[103px] z-10 w-2 md:w-3 h-2 md:h-3 bg-primary rounded-full"></div>
          </div>

          <SubTitle variant="H4" className="text-primary">
            Till 19 Nov 24
          </SubTitle>
          <P
            variant="P1"
            className="font-semibold font-montserrat mt-[1px] md:mt-[14px] mb-[10px] md:mb-8"
          >
            $24.250 Date Change Fee
          </P>
          <ul className="list-disc marker:text-red-500 list-outside flex flex-col items-start justify-center gap-[11px] md:gap-4 mx-4">
            {policyList.slice(0, 3).map(({ id, policy }) => (
              <li key={id}>
                <P variant="P1" className="inline">
                  {policy}
                </P>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TabsContent>
  )
}
