//@ts-check
import { CollectableItem } from "./collectable-base";

export class simpleGoodItem extends CollectableItem {
    constructor(x =0,y =0) {
        super(x,y);
    }
}