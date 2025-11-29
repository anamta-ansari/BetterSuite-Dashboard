import dynamic from "next/dynamic";

const HeatmapPage = dynamic(() => import("../Components/heatmap"), {
  ssr: false, // 🔥 MUST HAVE — prevents Vercel build error
});

export default function Page() {
  return <HeatmapPage />;
}
