import { handleVerifyWord } from 'src/handlers/verify.handler';

export default function verifyHandler(req, res) {
  const result = handleVerifyWord(req.body);

  if (!result) {
    return res.json({ verified: false });
  }

  return res.json({ verified: true, result });
}
