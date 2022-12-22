import { PerfumeList } from "./menu";
import SamsungKnoxAssetIntelligencePage from "./SPage";
//@ts-ignore
import KC from "shared/KC";

export default function Content({ contentToRender }: { contentToRender: string }) {
  const content = () => {
    if (contentToRender === "KAI") {
      return <SamsungKnoxAssetIntelligencePage />;
    } else if (contentToRender === "KFM") {
      return <PerfumeList />;
    } else {
      return <KC />;
    }
  };
  return <div id="content">{content()}</div>;
}
