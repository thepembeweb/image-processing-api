const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

export enum ImageCategory {
  Full = 'full',
  Thumb = 'thumb'
}

export const isValidRequest = (
  filename: unknown,
  width: unknown,
  height: unknown
) => {
  try {
    if (!isString(filename) || !isNumeric(width) || !isNumeric(height)) {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isValidFileName = (
  filename: string,
  category: 'full' | 'thumb'
): boolean => {
  try {
    if (fs.existsSync(resolveFilePath(`../assets/${category}/${filename}`))) {
      return true;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return false;
};

export const isResized = async (
  inputFilename: string,
  outputFilename: string,
  height: number,
  width: number
): Promise<boolean> => {
  try {
    const resized = await sharp(
      resolveFilePath(`../assets/${ImageCategory.Full}/${inputFilename}`)
    )
      .resize(height, width)
      .toFile(
        resolveFilePath(`../assets/${ImageCategory.Thumb}/${outputFilename}`)
      );
    return !!resized;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getResizedFileName = (fileName: string): string => {
  let fileNameResize: string | string[] = fileName.split('.');
  fileNameResize = fileNameResize.map((el, idx) => {
    if (idx === fileNameResize.length - 2) {
      return `${el}_thumb.`;
    }
    return el;
  });
  return fileNameResize.join('');
};

export const isNumeric = (value: any): boolean => {
  return !(value instanceof Array) && value - parseFloat(value) + 1 >= 0;
};

export const isString = (value: any): boolean => {
  return typeof value === 'string' || value instanceof String;
};

const resolveFilePath = (filePath: string): string => {
  return path.resolve(__dirname, filePath);
};
