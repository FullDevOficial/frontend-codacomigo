import { Text } from '@/components/ds/text';
import { Separator } from '@/components/ui/separator';

export function SeparatorLogin() {
  return (
    <div className="flex w-full items-center gap-4">
      <Separator className="flex-1 bg-zinc-300" />

      <Text size="p2" weight="regular" tone="muted">
        ou
      </Text>

      <Separator className="flex-1 bg-zinc-300" />
    </div>
  );
}
