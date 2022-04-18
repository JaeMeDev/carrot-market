import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const findToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!findToken) {
    return res.status(404).end();
  }
  req.session.user = {
    id: findToken.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: findToken.userId,
    },
  });
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: false })
);
