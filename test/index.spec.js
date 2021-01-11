import { groupArrayElements, ERROR_MESSAGES } from '../index';
import { expect } from 'chai';

describe('groupArrayElements', () => {
    ['test', undefined, 5, true].forEach(notAnArrayInput => {
        it(`should throw error if input is ${notAnArrayInput}`, () => {
            expect(() => groupArrayElements(notAnArrayInput, 3)).to.throw(ERROR_MESSAGES.NotAnArray)
        })
    });

    it('should return the same array if N is more than the length of the array', () => {
        expect(groupArrayElements(['1','2','3'], 5)).to.deep.equal([['1','2','3']]);
    })

    it('should divide an array into an array of N equally sized arrays', () => {
        expect(groupArrayElements(['1','2','3'], 3)).to.deep.equal([['1'],['2'],['3']]);
        expect(groupArrayElements(['1','2','3'], 2)).to.deep.equal([['1','2'],['3']]);
        expect(groupArrayElements(['1','2','3','4'], 2)).to.deep.equal([['1','2'],['3','4']]);
        expect(groupArrayElements(['1','2','3'], 1)).to.deep.equal([['1', '2', '3']]);
        expect(groupArrayElements([1, 2, 3, 4, 5], 2)).to.deep.equal([ [ 1, 2, 3 ], [ 4, 5]]);
    });

    [0, -1, 5.8, 'test', undefined].forEach(denominator => {
        it(`should throw error if N=${denominator}`, () => {
            expect(() => groupArrayElements(['1', '2', '3'], denominator)).to.throw(ERROR_MESSAGES.IncorrectDenominator);
        })
    });

    it('should throw error for empty array', () => {
        expect(() => groupArrayElements([], 5)).to.throw(ERROR_MESSAGES.EmptyArray);
    })

})