import {
  getResizedFileName,
  isNumeric,
  isResized,
  isString,
  isValidRequest,
  isValidFileName
} from '../../utils/common-utils';

describe('Tests for common-utils', () => {
  describe('function isString determines whether the supplied input value is a valid string', () => {
    it(`should receive input of 'abcde' and be true`, () => {
      const mockValue = 'abcde';
      const mockExpectedResult = true;

      const result = isString(mockValue);
      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
    it(`should receive input of 100 and be false`, () => {
      const mockValue = 100;
      const mockExpectedResult = false;

      const result = isString(mockValue);
      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
  });

  describe('function isNumeric determines whether the supplied input value is numeric', () => {
    it(`should receive input of 'abcde' and be false`, () => {
      const mockValue = 'abcde';
      const mockExpectedResult = false;

      const result = isNumeric(mockValue);
      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
    it(`should receive input of 100 and be true`, () => {
      const mockValue = 100;
      const mockExpectedResult = false;

      const result = isString(mockValue);
      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
  });

  describe('function isResized determines whether the supplied inputs successfully resize an image', () => {
    it(`should receive inputs of 'duck.jpg','duck_thumb.jpg',100,100 and be true`, async () => {
      const mockInputFilename = 'duck.jpg';
      const mockOutputFilename = 'duck_thumb.jpg';
      const mockInputHeight = 100;
      const mockInputWidth = 100;

      const mockExpectedResult = true;

      const result = await isResized(
        mockInputFilename,
        mockOutputFilename,
        mockInputHeight,
        mockInputWidth
      );

      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
  });

  describe('function isValidFileName determines whether the supplied inputs result in a valid file name', () => {
    it(`should receive inputs of 'duck.jpg','full' and be true`, async () => {
      const mockFilename = 'duck.jpg';
      const mockCategory = 'full';

      const mockExpectedResult = true;

      const result = await isValidFileName(mockFilename, mockCategory);

      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
    it(`should receive inputs of 'dog.jpg','full' and be false`, async () => {
      const mockFilename = 'dog.jpg';
      const mockCategory = 'full';

      const mockExpectedResult = false;

      const result = await isValidFileName(mockFilename, mockCategory);

      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
  });

  describe('function isValidRequest determines whether the supplied inputs result in a valid file name', () => {
    it(`should receive inputs of 'duck.jpg',100,100 and be true`, async () => {
      const mockFilename = 'duck.jpg';
      const mockWidth = 100;
      const mockHeight = 100;

      const mockExpectedResult = true;

      const result = await isValidRequest(mockFilename, mockWidth, mockHeight);

      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
    it(`should receive inputs of undefined,undefined,undefined and be false`, async () => {
      const mockFilename = undefined;
      const mockWidth = undefined;
      const mockHeight = undefined;

      const mockExpectedResult = false;

      const result = await isValidRequest(mockFilename, mockWidth, mockHeight);

      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
  });

  describe('function getResizedFileName returns the resized file name based on the input value', () => {
    it(`should receive input of 'duck.jpg' and be 'duck_thumb.jpg'`, () => {
      const mockValue = 'duck.jpg';
      const mockExpectedResult = 'duck_thumb.jpg';

      const result = getResizedFileName(mockValue);
      const expected = mockExpectedResult;
      expect(result).toEqual(expected);
    });
  });
});
