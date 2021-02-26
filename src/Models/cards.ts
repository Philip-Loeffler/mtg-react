import { cardType } from "../Models/cardType";
import { expansion } from "../Models/expansion";

export interface cards {
  id: number;
  name: string;
  quantity: number;
  type: cardType;
  expansionId: expansion;
}
