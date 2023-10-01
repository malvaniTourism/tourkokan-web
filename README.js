// npm run dev

// pages/about.js

// http://localhost:3000/blog/my-post
// pages/blog/[slug].js
import { useRouter } from 'next/router';
const router = useRouter();
const { slug } = router.query;
<p>This is the blog post with slug: {slug}</p>


router.push('/destination-page');


// components/ui/index.js
export { default as Button } from './Button';
export { default as Card } from './Card';

import { Button, Card } from '../components/ui';

// jsconfig.json
//  {
//     "compilerOptions": {
//       "baseUrl": ".",
//       "paths": {
//         "@pages/*": ["pages/*"],
//         "@component/*": ["custom/component/*", "common/component/*"],
//         "@/api/*": ["api/*"]
//       }
//     }
//   }