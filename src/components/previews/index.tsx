import type { PreviewKind } from "@/content/projects";
import { MealconomyPreview } from "./mealconomy";
import { RecruitmentPreview } from "./recruitment";
import { ShopifyPreview } from "./shopify";
import { SpeakupPreview } from "./speakup";
import { TeamianPreview } from "./teamian";
import { VettingPreview } from "./vetting";
import { VoicePreview } from "./voice";

export const previews: Record<PreviewKind, () => React.JSX.Element> = {
  recruitment: RecruitmentPreview,
  vetting: VettingPreview,
  shopify: ShopifyPreview,
  voice: VoicePreview,
  teamian: TeamianPreview,
  mealconomy: MealconomyPreview,
  speakup: SpeakupPreview,
};
