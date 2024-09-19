import type { Config } from 'tailwindcss'

// @ts-ignore
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // @ts-ignore
    function ({ addBase, theme }) {
      // from https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574?permalink_comment_id=4194451#gistcomment-4194451
      // @ts-ignore
      function extractColorVars (colorObj, colorGroup = '') {
        // @ts-ignore
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === "DEFAULT" ? `--tw-color${colorGroup}` : `--tw-color${colorGroup}-${colorKey}`;

          // @ts-ignore
          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    }
  ],
}
export default config
