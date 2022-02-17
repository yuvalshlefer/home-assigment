import { Request, Response, NextFunction } from 'express';
import freeEmailDomains from 'free-email-domains';
import countryCodeList from 'country-codes-list';

import { SearchResult, SearchModel } from '../../models';

export type RouteFunction = (request: Request, response: Response, next?: NextFunction) => void;

const phoneNumberRegex = /^\+{1}[0-9]{1,2}[\s]{0,1}[0-9]{0,3}\-[0-9]{7,9}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const getInputResult = (input: string): SearchResult => {
    if (emailRegex.test(input)) {
        const domain = input.split('@')[1];

        return freeEmailDomains.includes(domain);
    }

    if (phoneNumberRegex.test(input)) {
        const countryNameByCountryCode = countryCodeList.customList('countryCallingCode', '{countryNameEn}');
        const phoneCountryCode = input.split('-')[0].slice(1)

        return countryNameByCountryCode[phoneCountryCode] ?? 'Unknown Country';
    }
}

export const post = async (req, res) => {
    const newEntity = new SearchModel({
        inputs: req.body.inputs.map(input => ({
            value: input,
            result: getInputResult(input)
        }))
    });

    try {
        await newEntity.save();
        res.status(201).send(newEntity);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
}