import { getAssetFromKV } from "@cloudflare/kv-asset-handler";
import {
  type ExecutionContext,
  type KVNamespace,
  type Request,
} from "@cloudflare/workers-types";
// @ts-expect-error
import manifestJSON from "__STATIC_CONTENT_MANIFEST";

const manifest = JSON.parse(manifestJSON);

interface Env {
  __STATIC_CONTENT: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      return await getAssetFromKV(
        {
          // biome-ignore lint/suspicious/noExplicitAny: the @cloudflare/kv-asset-handler package is missing types
          request: request as any,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: manifest,
        },
      );
    } catch (_) {
      const pathname = new URL(request.url).pathname;

      return new Response(`"${pathname}" not found`, {
        status: 404,
        statusText: "not found",
      });
    }
  },
};
