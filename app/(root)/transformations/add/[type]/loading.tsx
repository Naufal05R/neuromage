export default function loading() {
  return (
    <div className="mt-10">
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="rounded-full bg-slate-400/20 text-transparent">
            Static Label
          </label>
          <div className="mt-2 h-[54px] rounded-2xl bg-slate-400/20" />
        </div>
        <div className="space-y-2">
          <label className="rounded-full bg-slate-400/20 text-transparent">
            Static Label
          </label>
          <div className="mt-2 h-[54px] rounded-2xl bg-slate-400/20" />
        </div>

        <div className="media-uploader-field">
          <div className="flex size-full flex-col space-y-2">
            <div className="flex flex-col gap-4">
              <div className="h-[42px] w-1/2 rounded-full bg-slate-400/20" />
              <div className="flex-center flex h-72 cursor-pointer flex-col gap-5 rounded-2xl bg-slate-400/20" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-[42px] w-1/2 rounded-full bg-slate-400/20" />
            <div className="flex-center flex h-72 cursor-pointer flex-col gap-5 rounded-2xl bg-slate-400/20" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="h-[54px] w-full rounded-full bg-slate-400/20" />
          <div className="h-[54px] w-full rounded-full bg-slate-400/20" />
        </div>
      </div>
    </div>
  );
}
