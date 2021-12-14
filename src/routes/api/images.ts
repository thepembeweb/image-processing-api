import express, { Request, Response } from 'express';
const path = require('path');

const images = express.Router();

import {
  getResizedFileName,
  isValidRequest,
  isValidFileName,
  isResized,
  ImageCategory
} from '../../utils/common-utils';

images.get('/images', async (req: Request, res: Response) => {
  try {
    const { filename, width, height } = req.query;

    if (!filename || !width || !height) {
      res
        .status(400)
        .send("Either 'filename', 'width' or 'height' are not present");
      return;
    }

    if (!isValidRequest(filename, width, height)) {
      res
        .status(400)
        .send(
          "Enter a valid 'filename'; and 'width' and 'height' greater than zero"
        );
      return;
    }

    const inputFilename = String(filename);
    const inputWidth = Number(width);
    const inputHeight = Number(height);

    if (!isValidFileName(inputFilename, ImageCategory.Full)) {
      res
        .status(400)
        .send("Enter a valid 'filename' that exists in the full images folder");
      return;
    }

    const outputFilename = getResizedFileName(inputFilename);

    if (isValidFileName(outputFilename, ImageCategory.Thumb)) {
      return res
        .status(201)
        .sendFile(
          path.join(
            __dirname,
            `../../assets/${ImageCategory.Thumb}/${outputFilename}`
          )
        );
    } else {
      const hasResized = await isResized(
        inputFilename,
        outputFilename,
        inputHeight,
        inputWidth
      );
      if (hasResized) {
        return res
          .status(200)
          .sendFile(
            path.join(
              __dirname,
              `../../assets/${ImageCategory.Thumb}/${outputFilename}`
            )
          );
      } else {
        return res
          .status(500)
          .send(`${filename} thumbnail could not be created.`);
      }
    }
  } catch (error) {
    res.status(400).json({
      message: 'bad request'
    });
  }
});

export default images;
