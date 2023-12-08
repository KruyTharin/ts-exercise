export type Letter = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;
type WowRemoveC = RemoveC<Letter>;

// Omit
type OmitType = Omit<Letter, "c">;
//     ^?
