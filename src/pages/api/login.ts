import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  // จำลองการตรวจสอบการล็อกอิน
  if (email === 'admin' && password === 'pass') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
}
