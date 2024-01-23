import {Cat, User} from './DBTypes';

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

interface UserResponse {
  user?: User;
  message?: string;
}

export {MessageResponse, ErrorResponse, UploadResponse, UserResponse};
