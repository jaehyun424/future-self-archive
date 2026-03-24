export interface Block {
  id: string;
  text: string;
  isPrivate: boolean;
}

export interface Paper {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  timeline: string;
  type: "letter" | "checklist" | "imagination" | "priorities" | "goals" | "steps";
  blocks: Block[];
}

export interface SessionData {
  isOwner: boolean;
}
