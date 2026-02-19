import { EmailForm } from "@/components/ui/email-form";

interface InlineCTAProps {
  id: string;
}

export function InlineCTA({ id }: InlineCTAProps) {
  return (
    <section className="-mt-12 sm:-mt-16 pb-6 sm:pb-8">
      <div className="max-w-md mx-auto px-2 sm:px-3 text-center">
        <EmailForm id={id} />
        <p className="text-secondary/50 text-xs font-sans mt-4">
          Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
