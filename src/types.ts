export type LoanPurpose = "car" | "home" | "education" | "business" | null;

export type Action<Type extends string = string, Payload = unknown> = {
  type: Type;
  payload: Payload;
};
