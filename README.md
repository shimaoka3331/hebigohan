# 規約

## ディレクトリ構造

    .
    ├── app
    │   └── page-name(URLになる部分)
    │       ├── page.tsx(画面の一番親のコンポーネント)
    │       └── layout.tsx(page-nameにかかるレイアウト)
    ├── components(共通コンポーネント)
    │   └── Footer.tsx
    ├── features(機能ごとのコンポーネント群)
    │   └── FeatureName
    │      ├── components
    │      │   ├── ComponentsName.tsx
    │      │   └── index.ts
    │      ├── hooks
    │      │   ├── useHooksName.tsx
    │      │   └── index.ts
    │      └── index.tsx(page.tsxで呼び出すコンポーネント)
    └── service(機能ごとのfetchの関数群)
        └── ServiceName
            └── index.ts

## ファイル名命名規則

各ページの一番親のコンポーネントの名前は、「page.tsx」固定。

また、page.tsx については export default function を使用すること。

```ts
export default function Home() {
  return <></>;
}
```

各コンポーネントについては、パスカルケースで統一すること。

また、コンポーネントの名前についてはファイル名と一致させること。

```ts
import type { FC } from "react";

export const ComponentName: FC = () => {
  return <></>;
};
```

## コンポーネントについて

features 配下のコンポーネントについての規約は、以下のとおりとする。

・コンポーネントには FC(function component)の型を定義する。

・props が単一である場合、型名称は「Props」とする。

・props は、コンポーネント内で分割代入して使用する。

```ts
import type { FC } from "react";

type Props = {
  id: number;
  name: string;
};

export const ComponentName: FC<Props> = (props: Props) => {
  const { id, name } = props;
  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
    </>
  );
};
```

## その他

変数名はキャメルケースで定義すること。

型名称はパスカルケースで定義すること。

state 管理はカスタムフックス内で定義すること。

画面初期表示時のデータフェッチはサーバーコンポーネントで行うこと。

<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
