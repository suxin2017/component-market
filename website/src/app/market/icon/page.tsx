"use client";

import { Icon } from "@/components/Icon";
import tags from "./tags.json";

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <h2>
        Refer by <a href="https://remixicon.com/">https://remixicon.com/</a>
      </h2>
      <div className="flex flex-col gap-3">
        {Object.keys(tags)
          .filter((item) => item !== "_comment")
          .map((tagGroup) => {
            return (
              <div key={tagGroup}>
                <h1 className="text-2xl">{tagGroup}</h1>
                <div className="flex flex-wrap gap-4">
                  {Object.keys(tags[tagGroup as keyof typeof tags]).map(
                    (item) => {
                      return (
                        <div
                          className="text-center w-1/12 cursor-copy"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `<Icon className={"${`ri-${item}-line`}"} />`
                            ).then(()=>{

                              alert('copy success')
                            })
                          }}
                        >
                          <Icon
                            key={item}
                            className={`ri-${item}-line text-4xl`}
                          />
                          <div className="text-slate-600">{item}</div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
