## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 디렉토리 구조 (FSD)

```bash
├── app/                # Next.js App Router 기본 폴더
├── src/
│   ├── app/            # FSD 패턴의 app 디렉토리 (App Router와 분리)
│   ├── views/          # FSD 패턴의 pages 디렉토리를 views로 변경
│   ├── widgets/        # 재사용 가능한 UI 컴포넌트들
│   ├── (features/)     # 기능별 폴더 (추후 추가 예정)
│   ├── (entities/)     # 도메인별 폴더 (추후 추가 예정)
│   ├── shared/         # 공통으로 사용되는 컴포넌트 및 유틸리티
└── ...
```

## Deploy on Vercel
