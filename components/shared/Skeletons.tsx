export const GalleryImageSkeleton = () => {
  return (
    <ul className="collection-list">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className="collection-card">
          <div className="h-52 w-full rounded-[10px] bg-slate-400" />
          <div className="flex-between">
            <div className="h-7 rounded-full bg-slate-400 odd:w-2/4 even:w-3/4"></div>
            <div className="flex-center h-6 w-6 rounded-full bg-slate-400" />
          </div>
        </li>
      ))}
    </ul>
  );
};
