import jwt from 'jsonwebtoken';

export const generateAccessToken = (id: string) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET as string, {
    expiresIn: '1h',
  });
};
