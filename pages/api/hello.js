// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as admin from 'firebase-admin'

export default (req, res) => {
  const preventTreeShaking = admin
  res.status(200).json({ name: 'John Doe' })
}
