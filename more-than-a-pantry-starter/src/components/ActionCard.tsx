type ActionCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ActionCard({ title, description, href }: ActionCardProps) {
  return (
    <article className="card action-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="text-link" href={href}>
        Start here →
      </a>
    </article>
  );
}
