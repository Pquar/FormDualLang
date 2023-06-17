/* import * as trpc from "@trpc/server";
import { resolve } from "path";
import { z } from "zod";

const router = trpc.router();

router.query("produtos", {
  output: z.object({
    data: z.array(
      z.object({
        name: z.string(),
        subtitle: z.string(),
        description: z.string(),
        price: z.number(),
      })
    ),
  }),
  async resolve({ input }) {
    const { id } = input;
    // Implemente a lógica para buscar os produtos pelo ID fornecido
    const produtos = await getProdutosById(id);
    return { data: produtos };
  },
});

export default router;
 */