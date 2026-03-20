import { Button } from "./button";  
export function ButtonSecondary(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="secondary"  className="bg-send color-palm border-border hover:border-palm hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30"
      {...props}
    />
  );
}