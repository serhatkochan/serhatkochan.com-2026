import { useEffect, useState } from 'react';

function daysUntil(isoDate: string) {
  const target = new Date(`${isoDate}T00:00:00`);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.round((target.getTime() - today.getTime()) / 86_400_000));
}

type Props = {
  targetIso: string;
  className?: string;
};

export default function AnimsatCountdown({ targetIso, className }: Props) {
  const [days, setDays] = useState(() => daysUntil(targetIso));

  useEffect(() => {
    const tick = () => setDays(daysUntil(targetIso));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [targetIso]);

  return (
    <span className={className} aria-live="polite">
      {days}
    </span>
  );
}
