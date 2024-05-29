export const LearningTags = ({ learning }: { learning: string[] }) => {
  return (
    <div className="flex flex-row gap-1">
      {learning.map((l) => {
        return (
          <>
            <div className="relative z-10 flex w-fit cursor-pointer items-center overflow-hidden rounded-xl border border-ui-button-neutral p-[2px]">
              <div className="animate-rotate absolute inset-0 h-full w-full rounded-lg tag-outline"></div>
              <div className="relative z-20 flex w-full rounded-lg bg-ui-button-neutral p-1 px-2 text-sm hover:bg-ui-button-neutral-hover delay-100 transition ease-in-out font-medium">
                {l}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
