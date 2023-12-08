// lose auto complete

// ==== 1
// type IconType = "settings" | "delete" | (string & {});
type IconType = LooseAutoComplete<"settings" | "delete">;
type LooseAutoComplete<T extends string> = T | (string & {});

type IconsProps = {
  icon: IconType;
};

const Icon = (props: IconsProps) => {
  return props.icon;
};
Icon({ icon: "settings" });

// ==== 2
// type IconType1 = "settings" | "delete" | Omit<string, "settings" | "delete">;
type IconType1 = LooseAutoComplete1<"settings" | "delete">;
type LooseAutoComplete1<T extends string> = T | Omit<string, T>;

const Icon2 = (props: IconsProps) => {
  return props.icon;
};

Icon2({ icon: "delete" });
