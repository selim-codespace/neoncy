import TechStackGrid from "@/components/tech-stack-grid/tech-stack-grid";

const DEVOPS_SCENE_LABEL = "DevOps infinity collage with automation tools inside hexagonal cells";

export const DevopsInfinityScene = () => {
  return (
    <div
      role="img"
      aria-label={DEVOPS_SCENE_LABEL}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02040a] p-4 text-slate-200"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-teal-900/10 blur-[120px]" />

      <TechStackGrid />
    </div>
  );
};
