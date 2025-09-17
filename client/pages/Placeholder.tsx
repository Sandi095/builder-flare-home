export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold text-primary">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-foreground/80">
          This page is a placeholder in the new site. Tell me what content you
          want here and I’ll build it to match the design.
        </p>
      </div>
    </section>
  );
}
