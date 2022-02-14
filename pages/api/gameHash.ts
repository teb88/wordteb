import { dateToHash } from "src/handlers/utils";

export default function handleGetGameHash(_, res) {
  res.json({
    gameHash: Buffer.from(dateToHash().toString()).toString('base64')
  })
}