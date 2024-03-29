import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import merge from "lodash.merge";
import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import reactAria from "tailwindcss-react-aria-components";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export function config(config?: Config) {
  return merge(
    {
      content: [
        "./node_modules/@cloudmix-dev/react/**/*.js",
        "./src/**/*.{astro,html,md,mdx,tsx}",
      ],
      safelist: [
        {
          pattern: /(token|loader|language-)/,
        },
      ],
      darkMode: "class",
      theme: {
        colors: {
          neutral: colors.zinc,
          brand: colors.indigo,
          secondary: colors.blue,
          info: colors.cyan,
          success: colors.emerald,
          danger: colors.red,
          warning: colors.amber,
          black: colors.black,
          white: colors.white,
          transparent: colors.transparent,
        },
        extend: {
          fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            display: ["Golos Text", ...defaultTheme.fontFamily.sans],
            mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
          },
        },
      },
      plugins: [
        typography,
        containerQueries,
        animate,
        reactAria,
        plugin(({ addComponents }) => {
          const text = {
            color: colors.zinc[50],
            fontFamily: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
          };
          const muted = {
            color: colors.zinc[300],
          };
          const mid = {
            color: colors.zinc[400],
          };
          const dark = {
            color: colors.zinc[500],
          };
          const pink = {
            color: colors.pink[400],
          };
          const indigo = {
            color: colors.indigo[400],
          };
          const blue = {
            color: colors.blue[400],
          };
          const green = {
            color: colors.green[400],
          };
          const teal = {
            color: colors.teal[200],
          };
          const orange = {
            color: colors.orange[400],
          };

          addComponents({
            'pre[class*="language-"]': text,
            ".token.tag": pink,
            ".token.class-name": pink,
            ".token.selector": pink,
            ".token.selector .class": pink,
            ".token.selector.class": pink,
            ".token.boolean": pink,
            ".token.function": pink,
            ".token.attr-name": muted,
            ".token.rule": muted,
            ".token.pseudo-class": muted,
            ".token.important": muted,
            ".token.keyword": indigo,
            ".token.module": indigo,
            ".token.plain": blue,
            ".token.comment": mid,
            ".token.operator": mid,
            ".token.combinator": mid,
            ".token.attr-value": green,
            ".token.class": green,
            ".token.string": green,
            ".token.property": green,
            ".token.punctuation": dark,
            ".token.attr-equals": dark,
            ".token.unit": teal,
            ".language-css .token.function": teal,
            ".token.number": orange,
            // Temporary override of Sonner styles
            ".loader": {
              padding: "0 !important",
              "box-shadow": "none !important",
            },
          });
        }),
      ],
    },
    config,
  ) as Config;
}
