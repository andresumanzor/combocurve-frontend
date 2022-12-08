import { NextApiHandler } from 'next';

interface WithApiRequestHandlerOptions {
    get?: NextApiHandler;
    post?: NextApiHandler;
    put?: NextApiHandler;
}

const supportedMethods = ['GET', 'POST', 'PUT'];

export const withApiRequestHandler =
    (options: WithApiRequestHandlerOptions): NextApiHandler =>
    async (req, res) => {
        const method = req.method;

        if (method && supportedMethods.includes(method as string)) {
            const methodHandler = options[method.toLowerCase() as keyof WithApiRequestHandlerOptions];

            if (methodHandler) {
                return methodHandler(req, res);
            }
        }

        res.setHeader('Allow', supportedMethods);
        return res.status(405).end(`Method ${method} Not Allowed`);
    };
