import { Schema, model, Document } from 'mongoose';

export type SearchResult = boolean | string;

type SearchInput = {
    value: string,
    result: SearchResult
}

export interface SearchDocument extends Document {
    inputs: SearchInput[]
}

const searchInputSchema = new Schema({
    value: { type: String, required: true },
    result: { type: Schema.Types.Mixed, required: true }
})

const schema = new Schema({
    inputs: [{ type: searchInputSchema }]
});

export const SearchModel = model<SearchDocument>('Search', schema, 'searches');