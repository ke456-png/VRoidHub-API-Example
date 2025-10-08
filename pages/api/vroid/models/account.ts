import { getSession } from 'next-auth/client';
import { CharacterModelCollectionResponse, CharacterModelSerializer } from '@/types/Response';
import { NextApiRequest, NextApiResponse } from 'next';
import { vroidHubApi } from '@/lib/vroid-hub-api';

type Query = {
  max_id: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query as Query;

  // oauthのアクセストークンを取得
  const token: string = (await getSession({ req }))?.accessToken as string;

  if (!token) {
    // トークンを保持していなければ401
    return res.status(401).json({ message: 'Failed to get access token!' });
  }

  // モデル一覧をfetch
  const apiRes = await vroidHubApi.getAccountCharacterModels(token, { max_id: query.max_id as string, count: 12 });
  if (apiRes.status !== 200) {
    return res.status(apiRes.status);
  }

  const apiResJson = (await apiRes.json()) as CharacterModelCollectionResponse;

  // それぞれのモデルについて、パラメータを集める
  const resJson: { maxId: string | null; data: Array<CharacterModelSerializer> } = { maxId: null, data: [] };
  if (apiResJson._links.next) {
    const url = new URL(apiResJson._links.next.href, process.env.NEXT_PUBLIC_VROID_HUB_URL);
    resJson.maxId = url.searchParams.get('max_id');
  }

  resJson.data = apiResJson.data;

  return res.status(200).json(resJson);
}
