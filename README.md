This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

## Bug recreation steps:
* Open http://localhost:3000/
* AFTER nuvo has loaded, click the button "Trigger Flash Message"
* The wrong color should be displayed now

To see the correct color:
* go to the package.json file
* change "nuvo-react": "^2.13.1" to "nuvo-react": "2.11.3"
* terminal: npm install
* terminal: npm run dev
* the color should be correct now

## Wrong color:
![picture alt](public/readme/wrong_color.png "wrong color png")

## Correct color:
![picture alt](public/readme/correct_color.png "correct color png")
