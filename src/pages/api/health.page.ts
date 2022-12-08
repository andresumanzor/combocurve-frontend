import type { NextApiHandler } from 'next';

const healthCheckHandler: NextApiHandler = async (_, res) => {
    res.status(200).json({ status: 'Ok!' });
};

export default healthCheckHandler;
