import {Cat} from './DBTypes';

type MessageResponse = {
  message: string;
  data?: Cat;
};

type ErrorResponse = MessageResponse & {
  stack?: string;
};

type UploadResponse = MessageResponse & {
  id: number;
};

export {MessageResponse, ErrorResponse, UploadResponse};
