import { logger } from "@services/logger";
import { Button } from "@ui/button";

export default function Home() {
  async function create() {
    "use server";
    logger.log("Hello from logger");
  }

  return (
    <form action={create}>
      <Button type="submit">Click Me</Button>
    </form>
  );
}
