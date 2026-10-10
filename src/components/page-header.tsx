export default function PageHeader({ tag, title, intro }: { tag: string; title: string; intro: string }) {
  return (
    <section className="pb-10 pt-16">
      <span className="tag">{tag}</span>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300">{intro}</p>
    </section>
  );
}
