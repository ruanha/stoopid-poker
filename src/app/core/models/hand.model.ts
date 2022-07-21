import { Card } from '../models/card.model';

export default interface Hand extends Array<Card> {
    [index: number]: Card;
}