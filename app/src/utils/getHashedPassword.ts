import crypto from 'crypto';

export const getHashedPassword = (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('base64');
};
